// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - ChronoCounter Lab K7P4
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Plus, RefreshCw, Search, Settings } from "lucide-react";


export type EmptyAndErrorRecoveryChronocounterLabK7p4ActionId = "button-1-1" | "button-2-2" | "button-3-3" | "button-4-4" | "button-5-5" | "new-stopwatch-6" | "new-stopwatch-7" | "clear-all-filters-8" | "re-initialize-session-9" | "session-0x-8821-1";

export interface EmptyAndErrorRecoveryChronocounterLabK7p4Props {
  actions?: Partial<Record<EmptyAndErrorRecoveryChronocounterLabK7p4ActionId, () => void>>;
}

export function EmptyAndErrorRecoveryChronocounterLabK7p4({ actions }: EmptyAndErrorRecoveryChronocounterLabK7p4Props) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface dark:bg-surface text-primary dark:text-primary font-body-md text-body-md h-screen w-16 flex flex-col items-center py-lg border-r border-outline-variant fixed left-0 top-0 z-50">
      {/* Header / Avatar Area */}
      <div className="mb-lg flex flex-col items-center">
      <div className="h-8 w-8 rounded bg-surface-variant flex items-center justify-center border border-outline-variant mb-xs" title="Lab K7P4">
      <Circle className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-label-caps text-label-caps text-on-surface-variant mt-sm">Lab K7P4</span>
      </div>
      {/* Main Navigation Tabs */}
      <div className="flex-1 w-full flex flex-col items-center gap-md">
      {/* Active Tab: Operations (closest match for general state/session) */}
      <button className="w-12 h-12 flex flex-col items-center justify-center rounded text-secondary dark:text-secondary bg-surface-container-high transition-colors scale-95 active:scale-90 group" title="Operations" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      {/* Inactive Tab: Editor */}
      <button className="w-12 h-12 flex flex-col items-center justify-center rounded text-outline dark:text-outline hover:bg-surface-container-high transition-colors scale-95 active:scale-90 group" title="Editor" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      {/* Inactive Tab: Settings */}
      <button className="w-12 h-12 flex flex-col items-center justify-center rounded text-outline dark:text-outline hover:bg-surface-container-high transition-colors scale-95 active:scale-90 group" title="Settings" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Footer Tabs */}
      <div className="w-full flex flex-col items-center mt-auto pt-md border-t border-outline-variant">
      {/* System Health Indicator */}
      <button className="w-12 h-12 flex flex-col items-center justify-center rounded text-outline dark:text-outline hover:bg-surface-container-high transition-colors scale-95 active:scale-90 group relative" title="System Health" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <div className="absolute top-2 right-2 w-2 h-2 rounded-full pip-emerald"></div>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 ml-16 flex flex-col h-screen overflow-hidden">
      {/* TopAppBar */}
      <header className="bg-surface-container dark:bg-surface-container text-primary dark:text-primary font-headline-sm text-headline-sm h-12 w-full flex items-center border-b border-outline-variant fixed top-0 right-0 left-16 z-40 px-md flex justify-between items-center">
      <div className="flex items-center gap-md">
      {/* Brand */}
      <span className="font-label-caps text-label-caps tracking-widest text-on-surface">ChronoCounter</span>
      {/* Separator */}
      <div className="h-4 w-px bg-outline-variant"></div>
      {/* Navigation Links */}
      <nav className="flex items-center gap-md">
      <a className="text-primary font-bold opacity-80 active:opacity-100 hover:text-primary transition-colors" href="#" data-action-id="session-0x-8821-1" onClick={actions?.["session-0x-8821-1"]}>Session: 0X-8821</a>
      </nav>
      </div>
      <div className="flex items-center gap-md">
      {/* Search Bar */}
      <div className="relative flex items-center glow-focus bg-surface-container-lowest rounded border border-outline-variant h-8 px-sm w-64">
      <Search className="text-[16px] text-on-surface-variant mr-sm" aria-hidden={true} focusable="false" />
      <input className="bg-transparent border-none outline-none text-on-surface font-mono-label text-mono-label w-full placeholder:text-outline-variant h-full p-0" placeholder="Query session data..." type="text" />
      </div>
      {/* Trailing Icon Actions */}
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-80 active:opacity-100 p-sm rounded hover:bg-surface-variant flex items-center justify-center" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      {/* Trailing Primary Action */}
      <button className="bg-primary text-on-primary font-mono-label text-mono-label h-8 px-md rounded flex items-center justify-center hover:bg-primary-fixed transition-colors opacity-80 active:opacity-100" type="button" data-action-id="new-stopwatch-6" onClick={actions?.["new-stopwatch-6"]}>
                          New Stopwatch
                      </button>
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-1 mt-12 p-lg overflow-y-auto bg-background flex flex-col items-center justify-center gap-lg">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-md">
      {/* Empty State Panel */}
      <section className="bg-surface-container-low rounded border border-outline-variant flex flex-col">
      <header className="bg-surface-container-high h-8 flex items-center px-sm border-b border-outline-variant rounded-t">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Operational Status</span>
      </header>
      <div className="p-lg flex flex-col items-center justify-center text-center flex-1 py-xl">
      <div className="w-16 h-16 rounded-full bg-surface-variant border border-outline flex items-center justify-center mb-md">
      <Circle className="text-[32px] text-outline" aria-hidden={true} focusable="false" />
      </div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface mb-sm">No Active Stopwatches Found</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-lg max-w-xs">
                                  The current session contains no active tracking records. Initialize a new sequence to begin data acquisition.
                              </p>
      <div className="flex flex-col gap-sm w-full max-w-[240px]">
      <button className="w-full bg-primary text-on-primary font-mono-label text-mono-label h-8 rounded flex items-center justify-center hover:bg-primary-fixed transition-colors" type="button" data-action-id="new-stopwatch-7" onClick={actions?.["new-stopwatch-7"]}>
      <Plus className="text-[16px] mr-xs" aria-hidden={true} focusable="false" />
                                      New Stopwatch
                                  </button>
      <button className="w-full bg-transparent border border-outline-variant text-on-surface font-mono-label text-mono-label h-8 rounded flex items-center justify-center hover:bg-surface-variant transition-colors" type="button" data-action-id="clear-all-filters-8" onClick={actions?.["clear-all-filters-8"]}>
      <Circle className="text-[16px] mr-xs" aria-hidden={true} focusable="false" />
                                      Clear All Filters
                                  </button>
      </div>
      </div>
      </section>
      {/* Error State Panel */}
      <section className="bg-surface-container-low rounded border border-error-container flex flex-col relative overflow-hidden">
      {/* Warning stripes at top */}
      <div className="h-1 w-full flex" style={{background: "repeating-linear-gradient(45deg, theme('colors.error-container'), theme('colors.error-container') 10px, transparent 10px, transparent 20px)"}}></div>
      <header className="bg-surface-container-high h-8 flex items-center px-sm border-b border-outline-variant">
      <span className="font-label-caps text-label-caps text-error uppercase flex items-center">
      <div className="w-2 h-2 rounded-full bg-error mr-sm"></div>
                                  System Diagnostics
                              </span>
      </header>
      <div className="p-lg flex flex-col items-start justify-center flex-1">
      <div className="flex items-center gap-sm mb-md">
      <Circle className="text-[24px] text-error" aria-hidden={true} focusable="false" />
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Sync Failure</h2>
      </div>
      <div className="bg-surface-dim border border-outline-variant rounded p-sm w-full mb-md">
      <div className="flex justify-between items-center mb-xs">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Error Code</span>
      <span className="font-display-data text-[14px] text-error font-bold">ERR-772</span>
      </div>
      <p className="font-data-table text-data-table text-on-surface-variant">
                                      Upstream telemetry endpoint unreachable. Handshake timeout on port 443 during payload transmission.
                                  </p>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                                  Local cache is preserved, but real-time broadcast is suspended until connection is re-established.
                              </p>
      <div className="mt-auto w-full">
      <button className="w-full bg-transparent border border-error text-error font-mono-label text-mono-label h-8 rounded flex items-center justify-center hover:bg-error-container hover:text-on-error-container transition-colors" type="button" data-action-id="re-initialize-session-9" onClick={actions?.["re-initialize-session-9"]}>
      <RefreshCw className="text-[16px] mr-xs" aria-hidden={true} focusable="false" />
                                      Re-initialize Session
                                  </button>
      </div>
      </div>
      </section>
      </div>
      </main>
      </div>
    </>
  );
}
