import React, { useState } from 'react';
import { Copy, Check, Terminal, Cpu, Database, Network } from 'lucide-react';
import { copyToClipboard, cn } from '../../lib/utils';

interface CodeSnippet {
  id: string;
  filename: string;
  title: string;
  icon: React.ReactNode;
  code: string;
}

const SNIPPETS: CodeSnippet[] = [
  {
    id: 'stripe-sync',
    filename: 'kioskStripeSync.ts',
    title: 'Kiosk & Stripe Metering',
    icon: <Database className="w-3.5 h-3.5 text-emerald-400" />,
    code: `// Offline-tolerant Kiosk Transaction & Stripe Usage Reporter
export async function reconcileKioskBatch(kioskId: string, events: KioskEvent[]) {
  const trx = await db.transaction();
  try {
    for (const evt of events) {
      // Idempotency check with monotonic sequence verification
      const existing = await trx.events.findUnique({ where: { uuid: evt.uuid } });
      if (existing) continue;

      await trx.events.create({ data: { kioskId, ...evt, syncedAt: new Date() } });

      if (evt.billableUnits > 0) {
        await stripe.subscriptionItems.createUsageRecord(
          evt.stripeSubscriptionItemId,
          { quantity: evt.billableUnits, timestamp: Math.floor(evt.timestamp / 1000) },
          { idempotencyKey: \`kiosk-usage-\${evt.uuid}\` }
        );
      }
    }
    await trx.commit();
    return { status: 'reconciled', processedCount: events.length };
  } catch (err) {
    await trx.rollback();
    throw new SyncConflictError('Failed to commit batch safely', err);
  }
}`
  },
  {
    id: 'route-optimizer',
    filename: 'adjusterRouteSequencer.ts',
    title: 'Claim Route Sequencing',
    icon: <Network className="w-3.5 h-3.5 text-indigo-400" />,
    code: `// Geographic Clustering & Google Distance Matrix Route Optimizer
export async function sequenceInspectionVisits(origin: Coordinate, claims: ClaimSite[]) {
  const destinations = claims.map(c => \`\${c.latitude},\${c.longitude}\`).join('|');
  
  const matrix = await distanceMatrixClient.getDistances({
    origins: [\`\${origin.lat},\${origin.lng}\`],
    destinations: destinations.split('|'),
    mode: 'driving',
    traffic_model: 'best_guess'
  });

  // Sort claims by minimal road transit duration with clustered stop windows
  const sequenced = claims.map((claim, idx) => ({
    ...claim,
    durationSeconds: matrix.rows[0].elements[idx].duration.value,
    distanceMeters: matrix.rows[0].elements[idx].distance.value
  })).sort((a, b) => a.durationSeconds - b.durationSeconds);

  return { optimizedRoute: sequenced, totalDurationMins: Math.round(sequenced.reduce((acc, c) => acc + c.durationSeconds, 0) / 60) };
}`
  },
  {
    id: 'email-parser',
    filename: 'sesClaimIntake.ts',
    title: 'AWS SES Claim Parser',
    icon: <Cpu className="w-3.5 h-3.5 text-purple-400" />,
    code: `// Inbound Policy Notice Intake via AWS SES & S3 attachment streaming
export async function handleSesClaimTrigger(snsRecord: SNSEventRecord) {
  const { mail, receipt } = JSON.parse(snsRecord.Sns.Message);
  const rawMessage = await s3.getObject({
    Bucket: process.env.SES_INBOUND_BUCKET,
    Key: mail.messageId
  }).promise();

  const parsed = await mailParser.simpleParser(rawMessage.Body as Buffer);
  const claimPolicyRef = extractPolicyNumber(parsed.subject, parsed.text);

  const claimRecord = await drizzleDb.insert(claims).values({
    policyNumber: claimPolicyRef,
    senderEmail: mail.source,
    intakeStatus: 'REQUIRES_TRIAGE',
    documentPayloadS3Key: mail.messageId,
    receivedAt: new Date(mail.timestamp)
  }).returning();

  return { success: true, claimId: claimRecord[0].id };
}`
  }
];

export const CodeWindow: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SNIPPETS[0].id);
  const [copied, setCopied] = useState(false);

  const currentSnippet = SNIPPETS.find(s => s.id === activeTab) || SNIPPETS[0];

  const handleCopy = async () => {
    const ok = await copyToClipboard(currentSnippet.code);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/95 shadow-2xl overflow-hidden text-left">
      {/* Window Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-zinc-500" />
            src/services/architecture
          </span>
        </div>

        <button
          onClick={handleCopy}
          type="button"
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-zinc-400 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/60 transition-colors"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 px-3 pt-2 bg-zinc-900/40 border-b border-zinc-800/60 overflow-x-auto no-scrollbar">
        {SNIPPETS.map(snippet => (
          <button
            key={snippet.id}
            onClick={() => setActiveTab(snippet.id)}
            className={cn(
              'flex items-center gap-2 px-3 py-1.5 rounded-t-lg text-xs font-mono transition-all border-t border-x cursor-pointer whitespace-nowrap',
              activeTab === snippet.id
                ? 'bg-zinc-950 text-indigo-400 border-zinc-800 font-semibold'
                : 'bg-transparent text-zinc-500 border-transparent hover:text-zinc-300'
            )}
          >
            {snippet.icon}
            <span>{snippet.filename}</span>
          </button>
        ))}
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed bg-zinc-950/80 max-h-[380px] overflow-y-auto">
        <pre className="text-zinc-300 whitespace-pre">
          <code>
            {currentSnippet.code.split('\n').map((line, idx) => {
              // Highlight comments, keywords, strings cleanly
              const isComment = line.trim().startsWith('//');
              const isImport = line.trim().startsWith('import') || line.trim().startsWith('export');
              return (
                <div key={idx} className="table-row group">
                  <span className="table-cell select-none pr-4 text-right text-zinc-600 font-mono text-xs w-6 group-hover:text-zinc-500">
                    {idx + 1}
                  </span>
                  <span
                    className={cn(
                      'table-cell',
                      isComment && 'text-zinc-500 italic',
                      isImport && 'text-indigo-400',
                      !isComment && !isImport && 'text-zinc-200'
                    )}
                  >
                    {line}
                  </span>
                </div>
              );
            })}
          </code>
        </pre>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/60 border-t border-zinc-800/60 text-[11px] font-mono text-zinc-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            TypeScript 5.x
          </span>
          <span>Node.js v20+</span>
        </div>
        <div className="text-zinc-500">
          Backend Architecture
        </div>
      </div>
    </div>
  );
};
