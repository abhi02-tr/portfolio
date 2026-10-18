import React, { useState } from 'react';
import { Database, Network, ShieldCheck, CheckCircle2, Cpu } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ScrollReveal } from '../ui/ScrollReveal';
import { cn } from '../../lib/utils';

interface ArchitectureNode {
  id: string;
  step: string;
  title: string;
  role: string;
  icon: React.ReactNode;
  description: string;
  technicalDetails: string[];
  samplePayload: string;
}

const KIOSK_NODES: ArchitectureNode[] = [
  {
    id: 'electron-client',
    step: 'Stage 01',
    title: 'Electron Kiosk Terminal',
    role: 'Physical POS Client',
    icon: <Cpu className="w-4 h-4 text-emerald-500" />,
    description: 'Runs offline-first state machine on touch kiosk hardware. Queues transaction records to local encrypted SQLite storage with monotonic sequence IDs.',
    technicalDetails: [
      'Encrypted local SQLite database persisting carts during power or Wi-Fi loss',
      'Monotonic client UUIDs + timestamp sequences preventing replay duplicates',
      'Peripheral barcode & receipt printer IPC protocol'
    ],
    samplePayload: `{\n  "kioskId": "kiosk-surat-04",\n  "eventUuid": "evt_9f81a7b2-3c4d",\n  "sequenceId": 10482,\n  "offlineCreated": "2026-10-18T10:14:22Z",\n  "billableUnits": 1,\n  "cartTotal": 450.00\n}`
  },
  {
    id: 'sync-gateway',
    step: 'Stage 02',
    title: 'Node.js Ingestion Gateway',
    role: 'REST / WebSocket Transport',
    icon: <Network className="w-4 h-4 text-indigo-500" />,
    description: 'Authenticates kiosk hardware via mTLS or signed session tokens, validates batch checksums, and begins database transaction isolation.',
    technicalDetails: [
      'Rate-limiting and token verification per merchant kiosk ID',
      'Atomic batch chunking handling up to 500 queued offline events per payload',
      'Zero data loss guarantee with rollback on transaction conflict'
    ],
    samplePayload: `POST /api/v1/kiosks/sync/batch\nHeaders: {\n  "X-Kiosk-Signature": "sha256=a8f09c...",\n  "Content-Type": "application/json"\n}`
  },
  {
    id: 'db-reconciler',
    step: 'Stage 03',
    title: 'PostgreSQL & Drizzle ORM',
    role: 'Idempotent Reconciler',
    icon: <Database className="w-4 h-4 text-purple-500" />,
    description: 'Enforces ACID constraints, verifies unique event UUIDs, and commits transactional records to PostgreSQL with audit timestamps.',
    technicalDetails: [
      'Unique constraints on eventUuid ensuring idempotency across retried network packets',
      'Drizzle ORM type-safe model execution preventing runtime type mismatches',
      'Live websocket event broadcast to merchant central admin dashboard'
    ],
    samplePayload: `// Idempotent commit\nINSERT INTO kiosk_events (uuid, kiosk_id, units, synced_at)\nVALUES ('evt_9f81a7b2', 'kiosk-04', 1, NOW())\nON CONFLICT (uuid) DO NOTHING;`
  },
  {
    id: 'stripe-metering',
    step: 'Stage 04',
    title: 'Stripe Usage Metering',
    role: 'Financial Billing Core',
    icon: <ShieldCheck className="w-4 h-4 text-cyan-500" />,
    description: 'Submits validated consumption units to Stripe Metered Billing API with idempotency keys matching original transaction UUIDs.',
    technicalDetails: [
      'Stripe subscriptionItem usage record creation',
      'Idempotency key binding preventing duplicate charges under webhook retries',
      'Auto-reconciliation on end-of-billing-cycle invoicing'
    ],
    samplePayload: `await stripe.subscriptionItems.createUsageRecord(\n  subscriptionItemId,\n  { quantity: 1, timestamp: Math.floor(Date.now() / 1000) },\n  { idempotencyKey: "kiosk-usage-evt_9f81a7b2" }\n);`
  }
];

export const ArchitectureInspector: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode>(KIOSK_NODES[0]);

  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            tag="System Architecture"
            title="Interactive Engineering Pipeline"
            subtitle="Click through each stage of the offline-tolerant Kiosk POS synchronization & Stripe metered billing pipeline to inspect data flow, schema payloads, and idempotency guarantees."
          />
        </ScrollReveal>

        <ScrollReveal direction="up" delayMs={100}>
          <div className="p-6 sm:p-8 rounded-3xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900/60 dark:shadow-2xl backdrop-blur-md">
            {/* Step selector bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {KIOSK_NODES.map((node) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    type="button"
                    className={cn(
                      'p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer',
                      isSelected
                        ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-500/10 shadow-sm'
                        : 'border-zinc-200 bg-zinc-50/70 hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-950/40 dark:hover:border-zinc-700'
                    )}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                        {node.step}
                      </span>
                      {node.icon}
                    </div>
                    <div className="text-sm font-bold text-zinc-950 dark:text-white truncate">
                      {node.title}
                    </div>
                    <div className="text-xs text-zinc-500 truncate mt-0.5 font-mono">
                      {node.role}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Inspector Details View */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left pt-6 border-t border-zinc-100 dark:border-zinc-800">
              {/* Left details */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-400 dark:border-indigo-500/30">
                    {selectedNode.step}
                  </span>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                    {selectedNode.title}
                  </h3>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {selectedNode.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
                    Architectural Invariants & Safeguards
                  </h4>
                  <ul className="space-y-2">
                    {selectedNode.technicalDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Payload / Code Preview */}
              <div className="lg:col-span-6 w-full">
                <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 p-4 text-left overflow-x-auto shadow-inner">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5 text-indigo-400">
                      <span className="w-2 h-2 rounded-full bg-indigo-500" />
                      Payload & Implementation Schema
                    </span>
                    <span className="text-[11px] text-zinc-500">Live Architecture Spec</span>
                  </div>
                  <pre className="text-xs font-mono text-zinc-300 leading-relaxed overflow-x-auto whitespace-pre">
                    <code>{selectedNode.samplePayload}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
