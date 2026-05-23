// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Stopwatch Editor - ChronoCounter Lab K7P4
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Info, Save, Settings } from "lucide-react";


export type StopwatchEditorChronocounterLabK7p4ActionId = "button-1-1" | "new-stopwatch-2" | "act-cancel-edit-3" | "act-save-record-4" | "operations-1" | "editor-2" | "settings-3" | "system-health-4";

export interface StopwatchEditorChronocounterLabK7p4Props {
  actions?: Partial<Record<StopwatchEditorChronocounterLabK7p4ActionId, () => void>>;
}

export function StopwatchEditorChronocounterLabK7p4({ actions }: StopwatchEditorChronocounterLabK7p4Props) {
  return (
    <>
      {/* SideNavBar (Shared Component JSON logic applied) */}
      <nav aria-label="Sidebar Navigation" className="bg-surface dark:bg-surface text-primary dark:text-primary font-body-md text-body-md border-r border-outline-variant h-screen w-16 flex flex-col items-center py-lg fixed left-0 top-0 h-full z-50 hidden md:flex">
      {/* Header Avatar/System Status */}
      <div className="mb-lg flex flex-col items-center group cursor-pointer" title="System Health Indicator">
      <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant relative">
      <Circle className="text-outline text-[18px]" aria-hidden={true} focusable="false" />
      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-secondary rounded-full animate-pulse border border-background"></div>
      </div>
      <span className="font-label-caps text-label-caps text-on-surface-variant mt-sm hidden group-hover:block transition-colors opacity-0 group-hover:opacity-100 absolute left-14 bg-surface-variant px-sm py-xs rounded">Lab K7P4</span>
      </div>
      {/* Navigation Tabs */}
      <div className="flex-1 flex flex-col gap-sm w-full px-sm">
      <a aria-label="Operations" className="text-outline dark:text-outline hover:bg-surface-container-high transition-colors scale-95 active:scale-90 w-full h-10 rounded-lg flex items-center justify-center group relative" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle aria-hidden={true} focusable="false" />
      <div className="absolute left-14 bg-surface-container-high text-on-surface px-sm py-xs rounded font-label-caps text-label-caps opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-outline-variant">Operations</div>
      </a>
      {/* ACTIVE TAB: Editor maps to this screen */}
      <a aria-current="page" aria-label="Editor" className="text-secondary dark:text-secondary hover:bg-surface-container-high transition-colors scale-95 active:scale-90 w-full h-10 rounded-lg flex items-center justify-center group relative bg-surface-container" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <Circle data-weight="fill" className="symbol-filled" aria-hidden={true} focusable="false" />
      <div className="absolute left-14 bg-surface-container-high text-on-surface px-sm py-xs rounded font-label-caps text-label-caps opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-outline-variant">Editor</div>
      </a>
      <a aria-label="Settings" className="text-outline dark:text-outline hover:bg-surface-container-high transition-colors scale-95 active:scale-90 w-full h-10 rounded-lg flex items-center justify-center group relative" href="#" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      <div className="absolute left-14 bg-surface-container-high text-on-surface px-sm py-xs rounded font-label-caps text-label-caps opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-outline-variant">Settings</div>
      </a>
      </div>
      {/* Footer Tab */}
      <div className="mt-auto w-full px-sm">
      <a aria-label="System Health" className="text-outline dark:text-outline hover:bg-surface-container-high transition-colors scale-95 active:scale-90 w-full h-10 rounded-lg flex items-center justify-center group relative" href="#" data-action-id="system-health-4" onClick={actions?.["system-health-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      <div className="absolute left-14 bg-surface-container-high text-on-surface px-sm py-xs rounded font-label-caps text-label-caps opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-outline-variant">System Health</div>
      </a>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 ml-0 md:ml-16 flex flex-col h-screen overflow-hidden bg-background">
      {/* TopAppBar (Shared Component JSON logic applied) */}
      <header aria-label="Top Navigation" className="bg-surface-container dark:bg-surface-container text-primary dark:text-primary font-headline-sm text-headline-sm border-b border-outline-variant h-12 w-full flex items-center fixed top-0 right-0 left-0 md:left-16 z-40 px-md justify-between">
      {/* Brand / Active Navigation */}
      <div className="flex items-center gap-md">
      <span className="font-label-caps text-label-caps tracking-widest text-on-surface uppercase opacity-80">ChronoCounter</span>
      <div className="h-4 w-px bg-outline-variant mx-sm"></div>
      <nav aria-label="Breadcrumb" className="flex items-center">
      <span className="text-primary font-bold opacity-80 active:opacity-100 transition-opacity">Session: 0X-8821</span>
      </nav>
      </div>
      {/* Trailing Actions / Search */}
      <div className="flex items-center gap-md">
      {/* Unsaved Changes Badge (Contextual to this screen) */}
      <div className="hidden sm:flex items-center gap-xs px-sm py-1 bg-surface-variant border border-outline-variant rounded-full opacity-80">
      <div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div>
      <span className="font-mono-label text-mono-label text-tertiary uppercase tracking-wider">Unsaved Changes</span>
      </div>
      <div className="h-6 w-px bg-outline-variant mx-sm hidden sm:block"></div>
      <button aria-label="schedule" className="text-outline hover:text-primary transition-colors opacity-80 active:opacity-100 flex items-center justify-center w-8 h-8 rounded hover:bg-surface-variant" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="bg-primary text-on-primary hover:bg-primary-fixed transition-colors font-mono-label text-mono-label uppercase tracking-wider px-md h-8 rounded flex items-center gap-xs" type="button" data-action-id="new-stopwatch-2" onClick={actions?.["new-stopwatch-2"]}>
      <span>New Stopwatch</span>
      </button>
      </div>
      </header>
      {/* Main Canvas (Scrollable area) */}
      <main className="flex-1 overflow-y-auto pt-12 p-md md:p-lg w-full max-w-5xl mx-auto flex flex-col gap-lg pb-24">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mt-sm">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface">Configuration Editor</h1>
      <p className="font-body-md text-body-md text-outline mt-xs">Define parameters for precision tracking node.</p>
      </div>
      </div>
      {/* Form Panel */}
      <form action="#" className="bg-surface-container-low border border-surface-variant rounded-xl flex flex-col overflow-hidden shadow-sm">
      {/* Panel Header */}
      <div className="bg-surface-container border-b border-surface-variant px-md py-sm flex items-center gap-sm">
      <Circle className="text-outline text-[18px]" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps tracking-widest text-on-surface-variant uppercase">Stopwatch Parameters</h2>
      </div>
      {/* Panel Body */}
      <div className="p-md md:p-lg flex flex-col gap-lg">
      {/* Stopwatch Name (Error State Demo) */}
      <div className="flex flex-col gap-sm">
      <label className="font-mono-label text-mono-label text-on-surface flex items-center gap-xs" htmlFor="stopwatch_name">
                                  Stopwatch Name <span className="text-error">*</span>
      </label>
      <div className="relative">
      <input aria-describedby="name-error" aria-invalid="true" className="w-full bg-surface-container-lowest border border-error text-on-surface font-body-md text-body-md rounded h-10 px-md focus:outline-none placeholder-outline-variant transition-colors" id="stopwatch_name" name="stopwatch_name" placeholder="e.g., Primary Reaction Timer" type="text" value="" />
      <Circle className="text-error absolute right-3 top-2.5 text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <p className="font-mono-label text-mono-label text-error flex items-center gap-xs" id="name-error">
                                  Name is required
                              </p>
      </div>
      {/* Initial Offset & Category Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      {/* Initial Offset (Monospaced) */}
      <div className="flex flex-col gap-sm">
      <label className="font-mono-label text-mono-label text-on-surface" htmlFor="initial_offset">Initial Offset (ms)</label>
      <div className="relative flex items-center bg-surface-container-lowest border border-outline-variant rounded focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
      <Circle className="text-outline absolute left-3 text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full bg-transparent border-none text-on-surface font-data-table text-data-table h-10 pl-10 pr-md focus:ring-0 text-right tabular-nums" id="initial_offset" name="initial_offset" step="0.01" type="number" value="0000.00" />
      </div>
      </div>
      {/* Session Category */}
      <div className="flex flex-col gap-sm">
      <label className="font-mono-label text-mono-label text-on-surface" htmlFor="session_category">Session Category</label>
      <div className="relative">
      <select className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md text-body-md rounded h-10 pl-md pr-10 focus:outline-none appearance-none transition-colors cursor-pointer" id="session_category" name="session_category">
      <option value="ctrl">Control Group (CTRL)</option>
      <option value="test">Test Phase (TEST)</option>
      <option selected={true} value="calib">Calibration (CALIB)</option>
      </select>
      <Circle className="text-outline absolute right-3 top-2.5 pointer-events-none text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      {/* Alert Threshold */}
      <div className="flex flex-col gap-sm border-t border-surface-variant pt-lg mt-sm">
      <label className="font-mono-label text-mono-label text-on-surface flex items-center gap-sm" htmlFor="alert_threshold">
                                  Alert Threshold
                                  <Info className="text-outline text-[16px] cursor-help" aria-hidden={true} focusable="false" />
      </label>
      <div className="flex items-center gap-md">
      <div className="relative flex items-center bg-surface-container-lowest border border-outline-variant rounded w-40 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
      <input className="w-full bg-transparent border-none text-on-surface font-data-table text-data-table h-10 px-md focus:ring-0 text-right tabular-nums" id="alert_threshold" name="alert_threshold" type="number" value="60000" />
      </div>
      <span className="font-data-table text-data-table text-outline-variant">milliseconds</span>
      </div>
      </div>
      </div>
      {/* Panel Actions (Footer) */}
      <div className="bg-surface-container border-t border-surface-variant p-md flex items-center justify-end gap-md">
      <button className="h-10 px-lg bg-transparent border border-outline-variant text-on-surface font-mono-label text-mono-label uppercase tracking-wider rounded hover:bg-surface-variant hover:text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container" type="button" data-action-id="act-cancel-edit-3" onClick={actions?.["act-cancel-edit-3"]}>
                              ACT_CANCEL_EDIT
                          </button>
      <button className="h-10 px-lg bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider rounded hover:bg-primary-fixed transition-colors flex items-center gap-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container shadow-[0_0_10px_rgba(173,198,255,0.2)]" type="submit" data-action-id="act-save-record-4" onClick={actions?.["act-save-record-4"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                              ACT_SAVE_RECORD
                          </button>
      </div>
      </form>
      </main>
      </div>
    </>
  );
}
