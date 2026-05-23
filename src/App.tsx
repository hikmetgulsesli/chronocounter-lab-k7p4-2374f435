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
      'act-create-record-6': () => chronocounterLabK7p4Store.createRecord(),
    }),
    [],
  );

  const editorActions = useMemo<Partial<Record<StopwatchEditorChronocounterLabK7p4ActionId, () => void>>>(
    () => ({
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
      'discard-changes-3': () => chronocounterLabK7p4Store.discardPreferenceChanges(),
      'apply-configuration-4': () => chronocounterLabK7p4Store.applyPreferences(),
      'standard-5': () => chronocounterLabK7p4Store.applyPreferences({ density: 'standard' }),
      'compact-6': () => chronocounterLabK7p4Store.applyPreferences({ density: 'compact' }),
      'factory-reset-7': () => chronocounterLabK7p4Store.factoryReset(),
    }),
    [],
  );

  const recoveryActions = useMemo<Partial<Record<EmptyAndErrorRecoveryChronocounterLabK7p4ActionId, () => void>>>(
    () => ({
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
      className="min-h-screen bg-slate-50 text-slate-950"
    >
      {state.activePanel === 'settings' ? <SettingsAndPreferencesChronocounterLabK7p4 actions={settingsActions} /> : null}
      {state.activePanel === 'editor' ? <StopwatchEditorChronocounterLabK7p4 actions={editorActions} /> : null}
      {state.activePanel === 'system-health' ? <EmptyAndErrorRecoveryChronocounterLabK7p4 actions={recoveryActions} /> : null}
      {state.activePanel === 'operations' ? <StopwatchOperationsChronocounterLabK7p4 actions={operationActions} /> : null}
    </div>
  );
}
