// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings and Preferences - ChronoCounter Lab K7P4
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Settings, TriangleAlert } from "lucide-react";


export type SettingsAndPreferencesChronocounterLabK7p4ActionId = "new-stopwatch-1" | "button-2-2" | "discard-changes-3" | "apply-configuration-4" | "standard-5" | "compact-6" | "factory-reset-7" | "link-1" | "link-2" | "link-3" | "link-4";

export interface SettingsAndPreferencesChronocounterLabK7p4Props {
  actions?: Partial<Record<SettingsAndPreferencesChronocounterLabK7p4ActionId, () => void>>;
}

export function SettingsAndPreferencesChronocounterLabK7p4({ actions }: SettingsAndPreferencesChronocounterLabK7p4Props) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="fixed left-0 top-0 h-full z-50 bg-surface dark:bg-surface border-r border-outline-variant h-screen w-16 flex flex-col items-center py-lg font-body-md text-body-md flat no shadows">
      <div className="mb-lg flex flex-col items-center gap-sm">
      <span className="font-label-caps text-label-caps text-on-surface-variant text-center" title="Lab K7P4">K7P4</span>
      <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant relative">
      <Circle style={{fontSize: "20px"}} className="text-outline" aria-hidden={true} focusable="false" />
      <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-secondary"></div>
      </div>
      </div>
      <div className="flex-1 flex flex-col gap-sm w-full px-xs">
      <a className="w-full aspect-square flex flex-col items-center justify-center rounded text-outline dark:text-outline hover:bg-surface-container-high transition-colors scale-95 active:scale-90" href="#" title="Operations" data-action-id="link-1" onClick={actions?.["link-1"]}>
      <Circle aria-hidden={true} focusable="false" />
      </a>
      <a className="w-full aspect-square flex flex-col items-center justify-center rounded text-outline dark:text-outline hover:bg-surface-container-high transition-colors scale-95 active:scale-90" href="#" title="Editor" data-action-id="link-2" onClick={actions?.["link-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </a>
      <a className="w-full aspect-square flex flex-col items-center justify-center rounded text-secondary dark:text-secondary hover:bg-surface-container-high transition-colors scale-95 active:scale-90 bg-surface-container-low" href="#" title="Settings" data-action-id="link-3" onClick={actions?.["link-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      </a>
      </div>
      <div className="mt-auto w-full px-xs">
      <a className="w-full aspect-square flex flex-col items-center justify-center rounded text-outline dark:text-outline hover:bg-surface-container-high transition-colors scale-95 active:scale-90" href="#" title="System Health" data-action-id="link-4" onClick={actions?.["link-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      </a>
      </div>
      </nav>
      {/* TopAppBar */}
      <header className="fixed top-0 right-0 left-16 z-40 px-md flex justify-between items-center bg-surface-container dark:bg-surface-container h-12 border-b border-outline-variant flat no shadows font-headline-sm text-headline-sm text-primary dark:text-primary">
      <div className="flex items-center gap-md">
      <span className="font-label-caps text-label-caps tracking-widest text-on-surface">ChronoCounter</span>
      <div className="h-4 w-px bg-outline-variant"></div>
      <span className="text-on-surface-variant text-sm font-data-table">Session: 0X-8821</span>
      </div>
      <div className="flex items-center gap-md">
      <button className="flex items-center gap-xs px-sm py-xs border border-primary text-primary rounded-DEFAULT text-sm font-data-table hover:bg-surface-container-high transition-colors opacity-80 active:opacity-100" type="button" data-action-id="new-stopwatch-1" onClick={actions?.["new-stopwatch-1"]}>
      <span>New Stopwatch</span>
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-80 active:opacity-100 flex items-center" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="ml-16 mt-12 w-full h-[calc(100vh-3rem)] overflow-y-auto bg-background p-md relative">
      <div className="max-w-4xl mx-auto space-y-md pb-lg">
      {/* Page Title */}
      <div className="flex items-end justify-between border-b border-outline-variant pb-sm mb-md">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface m-0">Settings &amp; Preferences</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Lab K7P4 Configuration Parameters</p>
      </div>
      <div className="flex gap-sm">
      <button className="h-8 px-md border border-primary text-primary rounded-DEFAULT font-mono-label text-mono-label flex items-center justify-center hover:bg-surface-container-high transition-colors uppercase" id="ACT_RETRY_LOAD" type="button" data-action-id="discard-changes-3" onClick={actions?.["discard-changes-3"]}>
                              Discard Changes
                          </button>
      <button className="h-8 px-md bg-primary text-on-primary rounded-DEFAULT font-mono-label text-mono-label flex items-center justify-center hover:opacity-90 transition-opacity uppercase" id="ACT_SAVE_PREFERENCES" type="button" data-action-id="apply-configuration-4" onClick={actions?.["apply-configuration-4"]}>
                              Apply Configuration
                          </button>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
      {/* Left Column */}
      <div className="col-span-1 md:col-span-8 space-y-md">
      {/* Workflow Defaults Panel */}
      <div className="instrument-panel rounded-DEFAULT flex flex-col">
      <div className="panel-header px-md py-sm rounded-t-DEFAULT flex items-center gap-sm">
      <Circle  style={{fontSize: "16px"}} className="text-outline" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-on-surface tracking-widest uppercase m-0">Workflow Defaults</h2>
      </div>
      <div className="p-md flex flex-col gap-md">
      <div className="grid grid-cols-2 gap-md items-center">
      <div>
      <label className="font-mono-label text-mono-label text-on-surface-variant block mb-xs">Default Increment (ms)</label>
      <p className="font-body-md text-body-md text-outline text-xs m-0">Base unit for timeline snapping.</p>
      </div>
      <div className="input-inset flex items-center rounded-DEFAULT px-sm h-8 w-full">
      <input className="bg-transparent border-none text-on-surface font-data-table text-data-table w-full text-right focus:ring-0 p-0" type="number" value="100" />
      </div>
      </div>
      <hr className="border-outline-variant m-0" />
      <div className="grid grid-cols-2 gap-md items-center">
      <div>
      <label className="font-mono-label text-mono-label text-on-surface-variant block mb-xs">Auto-save Interval (s)</label>
      <p className="font-body-md text-body-md text-outline text-xs m-0">Frequency of background sync.</p>
      </div>
      <div className="input-inset flex items-center rounded-DEFAULT px-sm h-8 w-full">
      <input className="bg-transparent border-none text-on-surface font-data-table text-data-table w-full text-right focus:ring-0 p-0" type="number" value="30" />
      </div>
      </div>
      </div>
      </div>
      {/* Display Preferences Panel */}
      <div className="instrument-panel rounded-DEFAULT flex flex-col">
      <div className="panel-header px-md py-sm rounded-t-DEFAULT flex items-center gap-sm">
      <Circle  style={{fontSize: "16px"}} className="text-outline" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-on-surface tracking-widest uppercase m-0">Display Preferences</h2>
      </div>
      <div className="p-md flex flex-col gap-md">
      <div className="flex items-center justify-between">
      <div>
      <label className="font-mono-label text-mono-label text-on-surface-variant block mb-xs">Density Mode</label>
      <p className="font-body-md text-body-md text-outline text-xs m-0">Compact data representation.</p>
      </div>
      <div className="flex items-center gap-xs">
      <button className="h-6 px-sm border border-outline-variant text-outline rounded-DEFAULT font-mono-label text-[10px] uppercase hover:bg-surface-container-high transition-colors" type="button" data-action-id="standard-5" onClick={actions?.["standard-5"]}>Standard</button>
      <button className="h-6 px-sm bg-surface-variant text-on-surface border border-primary rounded-DEFAULT font-mono-label text-[10px] uppercase" type="button" data-action-id="compact-6" onClick={actions?.["compact-6"]}>Compact</button>
      </div>
      </div>
      <hr className="border-outline-variant m-0" />
      <div className="flex items-center justify-between">
      <div>
      <label className="font-mono-label text-mono-label text-on-surface-variant block mb-xs">Force Monospace</label>
      <p className="font-body-md text-body-md text-outline text-xs m-0">Apply fixed-width to all numerical fields.</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface after:border-outline-variant after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      </div>
      </div>
      </div>
      {/* Right Column */}
      <div className="col-span-1 md:col-span-4 space-y-md">
      {/* Notification Rules Panel */}
      <div className="instrument-panel rounded-DEFAULT flex flex-col">
      <div className="panel-header px-md py-sm rounded-t-DEFAULT flex items-center gap-sm">
      <Circle  style={{fontSize: "16px"}} className="text-outline" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-on-surface tracking-widest uppercase m-0">Alert Rules</h2>
      </div>
      <div className="p-sm flex flex-col gap-xs">
      <label className="flex items-center gap-sm p-sm hover:bg-surface-container-high rounded-DEFAULT cursor-pointer transition-colors border border-transparent hover:border-outline-variant">
      <input checked={true} className="w-4 h-4 bg-surface-container border-outline-variant rounded text-primary focus:ring-primary" type="checkbox" />
      <span className="font-mono-label text-mono-label text-on-surface">Deviation Alerts</span>
      </label>
      <label className="flex items-center gap-sm p-sm hover:bg-surface-container-high rounded-DEFAULT cursor-pointer transition-colors border border-transparent hover:border-outline-variant">
      <input checked={true} className="w-4 h-4 bg-surface-container border-outline-variant rounded text-primary focus:ring-primary" type="checkbox" />
      <span className="font-mono-label text-mono-label text-on-surface">Sync Failures</span>
      </label>
      <label className="flex items-center gap-sm p-sm hover:bg-surface-container-high rounded-DEFAULT cursor-pointer transition-colors border border-transparent hover:border-outline-variant">
      <input className="w-4 h-4 bg-surface-container border-outline-variant rounded text-primary focus:ring-primary" type="checkbox" />
      <span className="font-mono-label text-mono-label text-on-surface">Session End</span>
      </label>
      </div>
      </div>
      {/* Danger Zone */}
      <div className="instrument-panel rounded-DEFAULT border-error-container flex flex-col mt-lg">
      <div className="panel-header px-md py-sm rounded-t-DEFAULT border-error-container bg-surface-container flex items-center gap-sm">
      <TriangleAlert  style={{fontSize: "16px"}} className="text-error" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-error tracking-widest uppercase m-0">System Reset</h2>
      </div>
      <div className="p-md">
      <p className="font-body-md text-body-md text-outline text-xs mb-sm m-0">Revert all configurations to laboratory defaults. This action cannot be undone.</p>
      <button className="w-full h-8 border border-error text-error rounded-DEFAULT font-mono-label text-mono-label flex items-center justify-center hover:bg-error-container hover:text-on-error-container transition-colors uppercase" type="button" data-action-id="factory-reset-7" onClick={actions?.["factory-reset-7"]}>
                                      Factory Reset
                                  </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Toast Notification (Hidden by default, shown on save) */}
      <div className="fixed bottom-md right-md transform translate-y-20 opacity-0 transition-colors duration-300 flex items-center p-sm mb-4 text-on-surface bg-surface-variant rounded-DEFAULT border border-secondary shadow-lg" id="toast-success" role="alert">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-secondary bg-surface-container-highest rounded-DEFAULT">
      <Circle style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
      </div>
      <div className="ms-3 font-mono-label text-mono-label pr-md">Configuration Applied Successfully.</div>
      </div>
      </main>
      
    </>
  );
}
