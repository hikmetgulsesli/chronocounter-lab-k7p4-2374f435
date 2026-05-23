import { useEffect, useMemo, useSyncExternalStore } from 'react';
import {
  EmptyAndErrorRecoveryChronocounterLabK7p4,
  SettingsAndPreferencesChronocounterLabK7p4,
  StopwatchEditorChronocounterLabK7p4,
  StopwatchOperationsChronocounterLabK7p4,
  type EmptyAndErrorRecoveryChronocounterLabK7p4ActionId,
  type SettingsAndPreferencesChronocounterLabK7p4ActionId,
  type StopwatchEditorChronocounterLabK7p4ActionId,
  type StopwatchOperationsChronocounterLabK7p4ActionId,
} from './screens';
import { chronocounterLabK7p4Store } from './features/chronocounter-lab-k7p4/chronocounter-lab-k7p4.store';
import { installChronoCounterLabK7p4Bridge } from './test/bridge';

export default function App() {
  const state = useSyncExternalStore(
    chronocounterLabK7p4Store.subscribe,
    chronocounterLabK7p4Store.getSnapshot,
    chronocounterLabK7p4Store.getSnapshot,
  );

  useEffect(() => installChronoCounterLabK7p4Bridge(chronocounterLabK7p4Store), []);

  const operationActions = useMemo<Partial<Record<StopwatchOperationsChronocounterLabK7p4ActionId, () => void>>>(
    () => ({
      'operations-1': () => chronocounterLabK7p4Store.navigate('operations'),
      'editor-2': () => chronocounterLabK7p4Store.navigate('editor'),
      'settings-3': () => chronocounterLabK7p4Store.navigate('settings'),
      'button-4-4': () => chronocounterLabK7p4Store.retryPersistence(),
      'button-5-5': () => chronocounterLabK7p4Store.recordAction('Reviewed running timers'),
      'act-create-record-6': () => chronocounterLabK7p4Store.createRecord(),
      'button-7-7': () => chronocounterLabK7p4Store.recordAction('Started focus interval'),
      'button-8-8': () => chronocounterLabK7p4Store.recordAction('Paused active timer'),
      'button-9-9': () => chronocounterLabK7p4Store.recordAction('Captured lap history'),
      'button-10-10': () => chronocounterLabK7p4Store.recordAction('Incremented quick counter'),
      'button-11-11': () => chronocounterLabK7p4Store.recordAction('Reset quick counter'),
      'button-12-12': () => chronocounterLabK7p4Store.navigate('system-health'),
    }),
    [],
  );

  const editorActions = useMemo<Partial<Record<StopwatchEditorChronocounterLabK7p4ActionId, () => void>>>(
    () => ({
      'button-1-1': () => chronocounterLabK7p4Store.navigate('operations'),
      'new-stopwatch-2': () => chronocounterLabK7p4Store.createRecord(),
      'act-cancel-edit-3': () => chronocounterLabK7p4Store.cancelEdit(),
      'act-save-record-4': () => chronocounterLabK7p4Store.saveSelectedRecord(),
      'operations-1': () => chronocounterLabK7p4Store.navigate('operations'),
      'editor-2': () => chronocounterLabK7p4Store.navigate('editor'),
      'settings-3': () => chronocounterLabK7p4Store.navigate('settings'),
      'system-health-4': () => chronocounterLabK7p4Store.navigate('system-health'),
    }),
    [],
  );

  const settingsActions = useMemo<Partial<Record<SettingsAndPreferencesChronocounterLabK7p4ActionId, () => void>>>(
    () => ({
      'new-stopwatch-1': () => chronocounterLabK7p4Store.createRecord(),
      'button-2-2': () => chronocounterLabK7p4Store.navigate('operations'),
      'discard-changes-3': () => chronocounterLabK7p4Store.discardPreferenceChanges(),
      'apply-configuration-4': () => chronocounterLabK7p4Store.applyPreferences(),
      'standard-5': () => chronocounterLabK7p4Store.applyPreferences({ density: 'standard' }),
      'compact-6': () => chronocounterLabK7p4Store.applyPreferences({ density: 'compact' }),
      'factory-reset-7': () => chronocounterLabK7p4Store.factoryReset(),
      'link-1': () => chronocounterLabK7p4Store.recordAction('Opened settings reference 1'),
      'link-2': () => chronocounterLabK7p4Store.recordAction('Opened settings reference 2'),
      'link-3': () => chronocounterLabK7p4Store.recordAction('Opened settings reference 3'),
      'link-4': () => chronocounterLabK7p4Store.recordAction('Opened settings reference 4'),
    }),
    [],
  );

  const recoveryActions = useMemo<Partial<Record<EmptyAndErrorRecoveryChronocounterLabK7p4ActionId, () => void>>>(
    () => ({
      'button-1-1': () => chronocounterLabK7p4Store.retryPersistence(),
      'button-2-2': () => chronocounterLabK7p4Store.navigate('operations'),
      'button-3-3': () => chronocounterLabK7p4Store.recordAction('Reviewed empty state'),
      'button-4-4': () => chronocounterLabK7p4Store.recordAction('Reviewed error diagnostics'),
      'button-5-5': () => chronocounterLabK7p4Store.clearError(),
      'new-stopwatch-6': () => chronocounterLabK7p4Store.createRecord(),
      'new-stopwatch-7': () => chronocounterLabK7p4Store.createRecord(),
      'clear-all-filters-8': () => chronocounterLabK7p4Store.clearError(),
      're-initialize-session-9': () => chronocounterLabK7p4Store.factoryReset(),
      'session-0x-8821-1': () => chronocounterLabK7p4Store.navigate('operations'),
    }),
    [],
  );

  return (
    <div
      data-setfarm-root="chronocounter-lab-k7p4"
      data-active-screen={state.activeScreen}
      data-active-panel={state.activePanel}
      data-storage-status={state.storageStatus}
      className="min-h-screen overflow-x-clip bg-slate-50 text-slate-950"
    >
      <section
        aria-label="ChronoCounter session status"
        aria-live="polite"
        className="border-b border-slate-200 bg-white px-4 py-2 text-xs text-slate-700"
        data-testid="chronocounter-session-status"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-4 gap-y-1">
          <span>Storage: {state.storageStatus}</span>
          <span>{state.lastError ? `Last error: ${state.lastError}` : 'Local persistence is ready.'}</span>
          <span>Last action: {state.lastAction ?? 'None'}</span>
          <span>Items: {state.counts.records}</span>
          <span>Panel: {state.activePanel}</span>
          <span>Selected: {state.selectedRecordId ?? 'none'}</span>
        </div>
      </section>
      {state.activePanel === 'settings' ? <SettingsAndPreferencesChronocounterLabK7p4 actions={settingsActions} /> : null}
      {state.activePanel === 'editor' ? <StopwatchEditorChronocounterLabK7p4 actions={editorActions} /> : null}
      {state.activePanel === 'system-health' ? <EmptyAndErrorRecoveryChronocounterLabK7p4 actions={recoveryActions} /> : null}
      {state.activePanel === 'operations' ? <StopwatchOperationsChronocounterLabK7p4 actions={operationActions} /> : null}
    </div>
  );
}
