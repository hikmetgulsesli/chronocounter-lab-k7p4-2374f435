// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Stopwatch Operations - ChronoCounter Lab K7P4
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Pencil, Play, Plus, Search, Settings } from "lucide-react";


export type StopwatchOperationsChronocounterLabK7p4ActionId = "operations-1" | "editor-2" | "settings-3" | "button-4-4" | "button-5-5" | "act-create-record-6" | "button-7-7" | "button-8-8" | "button-9-9" | "button-10-10" | "button-11-11" | "button-12-12";

export interface StopwatchOperationsChronocounterLabK7p4Props {
  actions?: Partial<Record<StopwatchOperationsChronocounterLabK7p4ActionId, () => void>>;
}

export function StopwatchOperationsChronocounterLabK7p4({ actions }: StopwatchOperationsChronocounterLabK7p4Props) {
  return (
    <>
      {/* Shared Component: SideNavBar */}
      <nav className="bg-surface dark:bg-surface h-screen w-16 flex flex-col items-center py-lg border-r border-outline-variant fixed left-0 top-0 z-50">
      {/* Header / Logo Area */}
      <div className="mb-lg flex flex-col items-center gap-sm">
      <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant relative" title="Lab K7P4">
      <span className="font-label-caps text-label-caps text-on-surface-variant">K7</span>
      {/* System Health Indicator */}
      <div aria-label="System Health Indicator: Active" className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-secondary border border-surface z-10 pip-running"></div>
      </div>
      </div>
      {/* Navigation Tabs */}
      <div className="flex flex-col gap-md flex-1 w-full">
      {/* Active Tab: Operations */}
      <button className="w-full py-sm flex flex-col items-center gap-xs text-secondary dark:text-secondary scale-95 active:scale-90 transition-transform relative group" type="button" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-secondary rounded-r-full"></div>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-[24px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-[9px] leading-[10px] uppercase tracking-widest text-center px-1">Operations</span>
      </button>
      {/* Inactive Tab: Editor */}
      <button className="w-full py-sm flex flex-col items-center gap-xs text-outline dark:text-outline hover:bg-surface-container-high transition-colors scale-95 active:scale-90 group" type="button" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} className="text-[24px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-[9px] leading-[10px] uppercase tracking-widest text-center px-1 group-hover:text-on-surface-variant transition-colors">Editor</span>
      </button>
      {/* Inactive Tab: Settings */}
      <button className="w-full py-sm flex flex-col items-center gap-xs text-outline dark:text-outline hover:bg-surface-container-high transition-colors scale-95 active:scale-90 group" type="button" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 0"}} className="text-[24px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-[9px] leading-[10px] uppercase tracking-widest text-center px-1 group-hover:text-on-surface-variant transition-colors">Settings</span>
      </button>
      </div>
      {/* Footer Tabs */}
      <div className="mt-auto flex flex-col items-center w-full">
      <button className="w-full py-sm flex flex-col items-center gap-xs text-outline dark:text-outline hover:bg-surface-container-high transition-colors scale-95 active:scale-90 group" title="System Health" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </nav>
      {/* Shared Component: TopAppBar */}
      <header className="bg-surface-container dark:bg-surface-container h-12 w-full flex items-center border-b border-outline-variant fixed top-0 right-0 left-16 z-40 px-md flex justify-between items-center pl-[calc(4rem+16px)] pr-md transition-colors duration-300">
      {/* Brand / Context */}
      <div className="flex items-center gap-md">
      <span className="font-label-caps text-label-caps tracking-widest text-on-surface uppercase">ChronoCounter</span>
      <div className="h-4 w-px bg-outline-variant"></div>
      {/* Navigation Links (Breadcrumb style) */}
      <nav className="flex items-center gap-sm">
      <span className="text-primary font-bold font-body-md text-body-md hover:text-primary transition-colors cursor-pointer">Session: 0X-8821</span>
      </nav>
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-md">
      {/* Search Bar (on_right) */}
      <div className="relative w-64 h-8">
      <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
      <Search className="text-[16px] text-outline" aria-hidden={true} focusable="false" />
      </div>
      <input className="w-full h-full bg-surface-container-lowest border border-surface-variant rounded focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none pl-8 pr-2 font-mono-label text-mono-label text-on-surface placeholder-outline-variant" placeholder="ACT_SEARCH_RECORDS" type="text" />
      </div>
      <div className="h-4 w-px bg-outline-variant mx-1"></div>
      {/* Icon Actions */}
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-80 active:opacity-100 p-1 rounded hover:bg-surface-variant flex items-center justify-center" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      {/* Primary Action */}
      <button className="bg-primary hover:bg-primary-fixed-dim text-on-primary h-8 px-sm rounded font-label-caps text-label-caps uppercase tracking-wider flex items-center gap-1 transition-colors ml-sm" type="button" data-action-id="act-create-record-6" onClick={actions?.["act-create-record-6"]}>
      <Plus className="text-[14px]" aria-hidden={true} focusable="false" />
                      ACT_CREATE_RECORD
                  </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="fixed inset-0 pt-[48px] pl-[64px] bg-background flex flex-col h-screen overflow-hidden">
      {/* Summary Metrics Strip */}
      <div className="shrink-0 h-20 bg-surface-container-low border-b border-outline-variant flex px-lg py-md gap-lg">
      {/* Metric 1 */}
      <div className="flex-1 bg-surface-container border border-surface-variant rounded p-sm flex flex-col justify-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-1">Active Sessions</span>
      <div className="flex items-baseline gap-2">
      <span className="font-display-data text-[32px] leading-none text-on-surface font-bold">12</span>
      <div className="w-2 h-2 rounded-full pip-running mb-1"></div>
      </div>
      </div>
      {/* Metric 2 */}
      <div className="flex-1 bg-surface-container border border-surface-variant rounded p-sm flex flex-col justify-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-1">Peak Lap Time</span>
      <div className="flex items-baseline gap-2">
      <span className="font-display-data text-[32px] leading-none text-primary font-bold">02:14.05</span>
      <span className="font-mono-label text-mono-label text-outline">SEC</span>
      </div>
      </div>
      {/* Metric 3 */}
      <div className="flex-1 bg-surface-container border border-surface-variant rounded p-sm flex flex-col justify-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-1">Total Events</span>
      <div className="flex items-baseline gap-2">
      <span className="font-display-data text-[32px] leading-none text-on-surface font-bold">89</span>
      </div>
      </div>
      {/* Contextual Chart Area (Placeholder for visual density) */}
      <div className="flex-1 bg-surface-container border border-surface-variant rounded p-sm flex items-center justify-center relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20" style={{background: "repeating-linear-gradient(90deg, transparent, transparent 4px, #adc6ff 4px, #adc6ff 5px)"}}></div>
      <div className="absolute bottom-0 left-0 w-full h-full flex items-end px-2 gap-1">
      <div className="w-full bg-secondary h-[40%] rounded-t-sm opacity-60"></div>
      <div className="w-full bg-secondary h-[60%] rounded-t-sm opacity-60"></div>
      <div className="w-full bg-secondary h-[30%] rounded-t-sm opacity-60"></div>
      <div className="w-full bg-secondary h-[80%] rounded-t-sm opacity-60"></div>
      <div className="w-full bg-secondary h-[50%] rounded-t-sm opacity-60"></div>
      <div className="w-full bg-secondary h-[90%] rounded-t-sm"></div>
      </div>
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase z-10 absolute top-2 left-2">Activity Rate</span>
      </div>
      </div>
      {/* Master / Detail Layout Area */}
      <div className="flex-1 flex overflow-hidden">
      {/* Primary List Panel (Master) */}
      <div className="flex-1 bg-background border-r border-outline-variant flex flex-col min-w-[500px]">
      {/* Table Header */}
      <div className="h-8 bg-surface-container flex items-center px-md border-b border-surface-variant font-label-caps text-label-caps text-on-surface-variant uppercase shrink-0">
      <div className="w-10">ID</div>
      <div className="flex-1">Name</div>
      <div className="w-32 text-right">Current Time</div>
      <div className="w-16 text-right">Laps</div>
      <div className="w-24 text-right">Status</div>
      <div className="w-16 text-center">Action</div>
      </div>
      {/* Table Body (Scrollable) */}
      <div className="flex-1 overflow-y-auto">
      {/* Row 1 (Running) */}
      <div className="flex items-center px-md py-2 border-b border-surface-variant hover:bg-surface-container-high transition-colors group cursor-pointer">
      <div className="w-10 font-mono-label text-mono-label text-outline">01</div>
      <div className="flex-1 font-body-md text-body-md text-on-surface flex items-center gap-2">
      <span>Main Assembly Line</span>
      <span className="px-1.5 py-0.5 rounded text-[10px] leading-none bg-surface-bright text-on-surface border border-outline-variant">A-Priority</span>
      </div>
      <div className="w-32 text-right font-data-table text-data-table text-secondary font-bold">14:02:45.99</div>
      <div className="w-16 text-right font-data-table text-data-table text-on-surface-variant">12</div>
      <div className="w-24 flex items-center justify-end gap-2">
      <div className="w-2 h-2 rounded-full pip-running"></div>
      <span className="font-mono-label text-mono-label text-secondary">Running</span>
      </div>
      <div className="w-16 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-primary hover:text-primary-fixed p-1 rounded" title="ACT_SELECT_RECORD" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Row 2 (Paused) */}
      <div className="flex items-center px-md py-2 border-b border-surface-variant hover:bg-surface-container-high transition-colors group cursor-pointer">
      <div className="w-10 font-mono-label text-mono-label text-outline">02</div>
      <div className="flex-1 font-body-md text-body-md text-on-surface">Secondary Calibration</div>
      <div className="w-32 text-right font-data-table text-data-table text-tertiary font-bold">00:45:12.10</div>
      <div className="w-16 text-right font-data-table text-data-table text-on-surface-variant">3</div>
      <div className="w-24 flex items-center justify-end gap-2">
      <div className="w-2 h-2 rounded-full pip-paused"></div>
      <span className="font-mono-label text-mono-label text-tertiary">Paused</span>
      </div>
      <div className="w-16 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-primary hover:text-primary-fixed p-1 rounded" title="ACT_SELECT_RECORD" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Row 3 (Selected State Simulation) */}
      <div className="flex items-center px-md py-2 border-b border-primary bg-surface-container-highest group cursor-pointer relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
      <div className="w-10 font-mono-label text-mono-label text-outline pl-1">03</div>
      <div className="flex-1 font-body-md text-body-md text-on-surface font-semibold">Reactor Cooling Loop</div>
      <div className="w-32 text-right font-data-table text-data-table text-primary font-bold">08:15:00.00</div>
      <div className="w-16 text-right font-data-table text-data-table text-on-surface-variant">42</div>
      <div className="w-24 flex items-center justify-end gap-2">
      <div className="w-2 h-2 rounded-full pip-inactive"></div>
      <span className="font-mono-label text-mono-label text-outline">Stopped</span>
      </div>
      <div className="w-16 flex justify-center opacity-100">
      <button className="text-primary hover:text-primary-fixed p-1 rounded bg-surface-dim" title="ACT_SELECT_RECORD" type="button" data-action-id="button-9-9" onClick={actions?.["button-9-9"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Row 4 (Running) */}
      <div className="flex items-center px-md py-2 border-b border-surface-variant hover:bg-surface-container-high transition-colors group cursor-pointer">
      <div className="w-10 font-mono-label text-mono-label text-outline">04</div>
      <div className="flex-1 font-body-md text-body-md text-on-surface">Quality Control Check B</div>
      <div className="w-32 text-right font-data-table text-data-table text-secondary font-bold">01:02:11.88</div>
      <div className="w-16 text-right font-data-table text-data-table text-on-surface-variant">5</div>
      <div className="w-24 flex items-center justify-end gap-2">
      <div className="w-2 h-2 rounded-full pip-running"></div>
      <span className="font-mono-label text-mono-label text-secondary">Running</span>
      </div>
      <div className="w-16 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-primary hover:text-primary-fixed p-1 rounded" title="ACT_SELECT_RECORD" type="button" data-action-id="button-10-10" onClick={actions?.["button-10-10"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </div>
      {/* Detail Panel (Drawer/Right Sidebar) */}
      <div className="w-[400px] bg-surface-container-low flex flex-col border-l border-outline-variant shrink-0">
      {/* Detail Header */}
      <div className="h-14 border-b border-surface-variant px-lg flex items-center justify-between bg-surface-container">
      <div>
      <div className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-0.5">ID: 03</div>
      <div className="font-headline-sm text-headline-sm text-on-surface truncate">Reactor Cooling Loop</div>
      </div>
      <div className="flex gap-1">
      <button className="w-8 h-8 rounded border border-outline-variant text-on-surface hover:bg-surface-variant hover:text-primary transition-colors flex items-center justify-center" type="button" data-action-id="button-11-11" onClick={actions?.["button-11-11"]}>
      <Play className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 rounded border border-outline-variant text-on-surface hover:bg-surface-variant transition-colors flex items-center justify-center" type="button" data-action-id="button-12-12" onClick={actions?.["button-12-12"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Detail Content */}
      <div className="flex-1 overflow-y-auto p-lg flex flex-col gap-lg">
      {/* Large Counter Display */}
      <div className="bg-surface-dim border border-surface-variant rounded p-lg flex flex-col items-center justify-center relative overflow-hidden">
      <span className="font-display-data text-[48px] leading-none text-primary font-bold tracking-tight">08:15:00</span>
      <span className="font-data-table text-[18px] text-primary mt-1">.00</span>
      <div className="absolute top-2 right-2 flex items-center gap-1 bg-surface-bright px-1.5 py-0.5 rounded">
      <div className="w-1.5 h-1.5 rounded-full pip-inactive"></div>
      <span className="font-label-caps text-[9px] text-outline uppercase">Stopped</span>
      </div>
      </div>
      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-px bg-outline-variant border border-outline-variant rounded overflow-hidden">
      <div className="bg-surface-container p-sm flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-1">Operator</span>
      <span className="font-body-md text-body-md text-on-surface truncate">Dr. Aris Thorne</span>
      </div>
      <div className="bg-surface-container p-sm flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-1">Location</span>
      <span className="font-body-md text-body-md text-on-surface truncate">Sector 4G</span>
      </div>
      <div className="bg-surface-container p-sm flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-1">Target Duration</span>
      <span className="font-data-table text-data-table text-on-surface">08:00:00</span>
      </div>
      <div className="bg-surface-container p-sm flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-1">Variance</span>
      <span className="font-data-table text-data-table text-error">+00:15:00</span>
      </div>
      </div>
      {/* Lap Details Table inside Panel */}
      <div className="flex flex-col flex-1 border border-surface-variant rounded overflow-hidden bg-surface-container">
      <div className="bg-surface-container-highest px-sm py-xs border-b border-surface-variant flex justify-between items-center">
      <span className="font-label-caps text-label-caps text-on-surface uppercase">Lap Data</span>
      <span className="font-mono-label text-[10px] text-outline">Total Laps: 42</span>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
      {/* Lap Header */}
      <div className="flex px-sm py-1 border-b border-surface-variant font-label-caps text-[9px] text-on-surface-variant uppercase bg-surface-dim sticky top-0">
      <div className="w-8">Lap</div>
      <div className="flex-1 text-right">Split</div>
      <div className="flex-1 text-right">Total</div>
      </div>
      {/* Lap Rows */}
      <div className="flex px-sm py-1 border-b border-surface-variant font-data-table text-[11px] hover:bg-surface-bright">
      <div className="w-8 text-outline">42</div>
      <div className="flex-1 text-right text-on-surface">00:12:05.10</div>
      <div className="flex-1 text-right text-primary">08:15:00.00</div>
      </div>
      <div className="flex px-sm py-1 border-b border-surface-variant font-data-table text-[11px] hover:bg-surface-bright">
      <div className="w-8 text-outline">41</div>
      <div className="flex-1 text-right text-on-surface">00:11:58.20</div>
      <div className="flex-1 text-right text-on-surface-variant">08:02:54.90</div>
      </div>
      <div className="flex px-sm py-1 border-b border-surface-variant font-data-table text-[11px] hover:bg-surface-bright">
      <div className="w-8 text-outline">40</div>
      <div className="flex-1 text-right text-on-surface">00:12:10.05</div>
      <div className="flex-1 text-right text-on-surface-variant">07:50:56.70</div>
      </div>
      <div className="flex px-sm py-1 border-b border-surface-variant font-data-table text-[11px] hover:bg-surface-bright">
      <div className="w-8 text-outline">39</div>
      <div className="flex-1 text-right text-on-surface">00:11:45.00</div>
      <div className="flex-1 text-right text-on-surface-variant">07:38:46.65</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
