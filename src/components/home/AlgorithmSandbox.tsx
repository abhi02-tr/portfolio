import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Pause, ExternalLink, Code2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { ScrollReveal } from '../ui/ScrollReveal';

export const AlgorithmSandbox: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [comparing, setComparing] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [comparisons, setComparisons] = useState(0);
  const [swaps, setSwaps] = useState(0);
  const [speed, setSpeed] = useState(50); // ms delay
  const isSortingRef = useRef(false);

  // Initialize random array
  const resetArray = () => {
    isSortingRef.current = false;
    setIsRunning(false);
    setComparing([]);
    setSortedIndices([]);
    setComparisons(0);
    setSwaps(0);
    const newArr: number[] = [];
    for (let i = 0; i < 18; i++) {
      newArr.push(Math.floor(Math.random() * 85) + 15);
    }
    setArray(newArr);
  };

  useEffect(() => {
    resetArray();
  }, []);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const runBubbleSort = async () => {
    if (isRunning) {
      isSortingRef.current = false;
      setIsRunning(false);
      return;
    }

    setIsRunning(true);
    isSortingRef.current = true;

    const arr = [...array];
    const n = arr.length;
    let compCount = 0;
    let swapCount = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!isSortingRef.current) return;

        setComparing([j, j + 1]);
        compCount++;
        setComparisons(compCount);
        await sleep(110 - speed);

        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapCount++;
          setSwaps(swapCount);
          setArray([...arr]);
          await sleep(110 - speed);
        }
      }
      setSortedIndices(prev => [...prev, n - i - 1]);
    }

    setComparing([]);
    setSortedIndices(Array.from({ length: n }, (_, k) => k));
    setIsRunning(false);
    isSortingRef.current = false;
  };

  return (
    <section className="py-20 md:py-24 bg-zinc-50/70 dark:bg-zinc-950/60 border-y border-zinc-200 dark:border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            tag="Live Engineering Sandbox"
            title="Algorithm Visualization Playground"
            subtitle="An interactive computer science demonstration inspired by Abhi's open-source Bubble Sort Visualizer repository."
            action={
              <Button
                href="https://github.com/abhi02-tr/bubble_sort_visulizer"
                isExternal
                variant="outline"
                size="sm"
                rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
              >
                View Repository
              </Button>
            }
          />
        </ScrollReveal>

        <ScrollReveal direction="up" delayMs={100}>
          <div className="p-6 sm:p-8 rounded-3xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900/60 dark:shadow-2xl backdrop-blur-md">
            {/* Visualizer Header telemetry */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800/80">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-indigo-500" />
                <span className="text-sm font-bold text-zinc-950 dark:text-white font-mono">
                  Bubble Sort Runtime State
                </span>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono">
                <div>
                  <span className="text-zinc-500">Comparisons: </span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">{comparisons}</span>
                </div>
                <div>
                  <span className="text-zinc-500">Swaps: </span>
                  <span className="text-purple-600 dark:text-purple-400 font-bold">{swaps}</span>
                </div>
                <div>
                  <span className="text-zinc-500">Time Complexity: </span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">O(N²)</span>
                </div>
              </div>
            </div>

            {/* Bars Canvas */}
            <div className="py-10 flex items-end justify-center gap-1.5 sm:gap-2.5 h-64 bg-zinc-50/80 dark:bg-zinc-950/80 rounded-2xl my-6 border border-zinc-100 dark:border-zinc-800/50 px-4">
              {array.map((val, idx) => {
                const isComp = comparing.includes(idx);
                const isSorted = sortedIndices.includes(idx);

                let barColor = 'bg-zinc-300 dark:bg-zinc-700';
                if (isComp) barColor = 'bg-amber-400 dark:bg-amber-400 scale-105';
                if (isSorted) barColor = 'bg-emerald-500 dark:bg-emerald-400';

                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center flex-1 max-w-[28px] transition-all duration-75"
                  >
                    <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 mb-1 hidden sm:inline">
                      {val}
                    </span>
                    <div
                      style={{ height: `${val * 2.2}px` }}
                      className={`w-full rounded-t-md transition-all duration-75 ${barColor}`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
              <div className="flex items-center gap-3">
                <Button
                  onClick={runBubbleSort}
                  variant="primary"
                  size="sm"
                  leftIcon={isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                >
                  {isRunning ? 'Pause Sort' : 'Start Sort'}
                </Button>

                <Button
                  onClick={resetArray}
                  disabled={isRunning}
                  variant="secondary"
                  size="sm"
                  leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
                >
                  Randomize Array
                </Button>
              </div>

              {/* Speed Slider */}
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <span>Speed:</span>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={speed}
                  disabled={isRunning}
                  onChange={e => setSpeed(Number(e.target.value))}
                  className="w-28 sm:w-36 accent-indigo-600 cursor-pointer"
                />
                <span className="w-8">{speed}%</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
