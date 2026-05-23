import {
  chronocounterLabK7p4DefaultPreferences,
  chronocounterLabK7p4SeedRecords,
} from '../../__fixtures__/chronocounter-lab-k7p4.fixture';
import { chronocounterLabK7p4Repository, type ChronoCounterRepository } from './chronocounter-lab-k7p4.repo';

export type ChronoCounterPanel = 'operations' | 'editor' | 'settings' | 'system-health';
export type ChronoCounterStorageState = 'available' | 'unavailable' | 'recovered';

export interface ChronoCounterRecord {
  id: string;
  label: string;
  elapsedMs: number;
  status: 'draft' | 'running' | 'paused' | 'saved';
  createdAt: string;
  updatedAt: string;
}

export interface ChronoCounterPreferences {
  density: 'standard' | 'compact';
  keepCompletedRecords: boolean;
}

export interface ChronoCounterPersistedState {
  records: ChronoCounterRecord[];
  preferences: ChronoCounterPreferences;
  selectedRecordId: string | null;
  activePanel: ChronoCounterPanel;
}

export interface ChronoCounterState extends ChronoCounterPersistedState {
  activeScreen: string;
  route: ChronoCounterPanel;
  storageStatus: ChronoCounterStorageState;
  lastError: string | null;
  counts: {
    records: number;
    running: number;
    saved: number;
  };
}

export interface ChronoCounterAppBridge {
  activeScreen: string;
  route: ChronoCounterPanel;
  activePanel: ChronoCounterPanel;
  selectedRecord: ChronoCounterRecord | null;
  selectedRecordId: string | null;
  counts: ChronoCounterState['counts'];
  storageStatus: ChronoCounterStorageState;
  lastError: string | null;
}

export interface ChronoCounterStore {
  getSnapshot(): ChronoCounterState;
  subscribe(listener: () => void): () => void;
  navigate(panel: ChronoCounterPanel): void;
  createRecord(): void;
  saveSelectedRecord(): void;
  cancelEdit(): void;
  applyPreferences(preferences?: Partial<ChronoCounterPreferences>): void;
  discardPreferenceChanges(): void;
  factoryReset(): void;
  clearError(): void;
  getBridge(): ChronoCounterAppBridge;
}

function toScreen(panel: ChronoCounterPanel): string {
  if (panel === 'editor') {
    return 'stopwatch-editor';
  }

  if (panel === 'settings') {
    return 'settings-and-preferences';
  }

  if (panel === 'system-health') {
    return 'empty-and-error-recovery';
  }

  return 'stopwatch-operations';
}

function getCounts(records: ChronoCounterRecord[]): ChronoCounterState['counts'] {
  return {
    records: records.length,
    running: records.filter((record) => record.status === 'running').length,
    saved: records.filter((record) => record.status === 'saved').length,
  };
}

function getPersistedState(state: ChronoCounterState): ChronoCounterPersistedState {
  return {
    records: state.records,
    preferences: state.preferences,
    selectedRecordId: state.selectedRecordId,
    activePanel: state.activePanel,
  };
}

function buildState(persisted: ChronoCounterPersistedState, storageStatus: ChronoCounterStorageState, lastError: string | null): ChronoCounterState {
  return {
    ...persisted,
    activeScreen: toScreen(persisted.activePanel),
    route: persisted.activePanel,
    storageStatus,
    lastError,
    counts: getCounts(persisted.records),
  };
}

function createDefaultPersistedState(): ChronoCounterPersistedState {
  return {
    records: chronocounterLabK7p4SeedRecords,
    preferences: chronocounterLabK7p4DefaultPreferences,
    selectedRecordId: null,
    activePanel: 'operations',
  };
}

export function createChronoCounterStore(repository: ChronoCounterRepository = chronocounterLabK7p4Repository): ChronoCounterStore {
  const loaded = repository.load();
  let state = buildState(loaded.data ?? createDefaultPersistedState(), loaded.status, loaded.error);
  const listeners = new Set<() => void>();

  function emit(nextPersisted: ChronoCounterPersistedState, shouldPersist = true, lastError = state.lastError) {
    let storageStatus = state.storageStatus;
    let error = lastError;

    if (shouldPersist) {
      const saved = repository.save(nextPersisted);
      storageStatus = saved.status;
      error = saved.error;
    }

    state = buildState(nextPersisted, storageStatus, error);
    listeners.forEach((listener) => listener());
  }

  return {
    getSnapshot() {
      return state;
    },

    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },

    navigate(panel) {
      emit({ ...getPersistedState(state), activePanel: panel });
    },

    createRecord() {
      const now = new Date().toISOString();
      const record: ChronoCounterRecord = {
        id: `sw-${Date.now().toString(36)}`,
        label: `Stopwatch ${state.records.length + 1}`,
        elapsedMs: 0,
        status: 'draft',
        createdAt: now,
        updatedAt: now,
      };

      emit({
        ...getPersistedState(state),
        activePanel: 'editor',
        selectedRecordId: record.id,
        records: [record, ...state.records],
      });
    },

    saveSelectedRecord() {
      if (!state.selectedRecordId) {
        emit({ ...getPersistedState(state), activePanel: 'operations' }, true, null);
        return;
      }

      const now = new Date().toISOString();
      emit({
        ...getPersistedState(state),
        activePanel: 'operations',
        records: state.records.map((record) =>
          record.id === state.selectedRecordId ? { ...record, status: 'saved', updatedAt: now } : record,
        ),
      }, true, null);
    },

    cancelEdit() {
      emit({ ...getPersistedState(state), activePanel: 'operations', selectedRecordId: null }, true, null);
    },

    applyPreferences(preferences = {}) {
      emit({
        ...getPersistedState(state),
        preferences: { ...state.preferences, ...preferences },
      }, true, null);
    },

    discardPreferenceChanges() {
      emit(getPersistedState(state), false, null);
    },

    factoryReset() {
      const cleared = repository.clear();
      state = buildState(createDefaultPersistedState(), cleared.status, cleared.error);
      listeners.forEach((listener) => listener());
    },

    clearError() {
      emit(getPersistedState(state), false, null);
    },

    getBridge() {
      const selectedRecord = state.records.find((record) => record.id === state.selectedRecordId) ?? null;

      return {
        activeScreen: state.activeScreen,
        route: state.route,
        activePanel: state.activePanel,
        selectedRecord,
        selectedRecordId: state.selectedRecordId,
        counts: state.counts,
        storageStatus: state.storageStatus,
        lastError: state.lastError,
      };
    },
  };
}

export const chronocounterLabK7p4Store = createChronoCounterStore();
