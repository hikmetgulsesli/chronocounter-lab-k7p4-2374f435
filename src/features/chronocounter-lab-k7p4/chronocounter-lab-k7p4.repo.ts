import type { ChronoCounterPersistedState } from './chronocounter-lab-k7p4.store';

const STORAGE_KEY = 'chronocounter-lab-k7p4:v1';

export type ChronoCounterStorageStatus = 'available' | 'unavailable' | 'recovered';

export interface ChronoCounterLoadResult {
  data: ChronoCounterPersistedState | null;
  status: ChronoCounterStorageStatus;
  error: string | null;
}

export interface ChronoCounterRepository {
  load(): ChronoCounterLoadResult;
  save(state: ChronoCounterPersistedState): ChronoCounterLoadResult;
  clear(): ChronoCounterLoadResult;
}

function getLocalStorage(): Storage | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function isPersistedState(value: unknown): value is ChronoCounterPersistedState {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as ChronoCounterPersistedState;
  return Array.isArray(candidate.records) && !!candidate.preferences && typeof candidate.preferences === 'object';
}

export const chronocounterLabK7p4Repository: ChronoCounterRepository = {
  load() {
    const storage = getLocalStorage();

    if (!storage) {
      return { data: null, status: 'unavailable', error: 'Local storage is unavailable for this session.' };
    }

    try {
      const raw = storage.getItem(STORAGE_KEY);

      if (!raw) {
        return { data: null, status: 'available', error: null };
      }

      const parsed = JSON.parse(raw) as unknown;

      if (!isPersistedState(parsed)) {
        storage.removeItem(STORAGE_KEY);
        return { data: null, status: 'recovered', error: 'Saved ChronoCounter data was invalid and has been reset.' };
      }

      return { data: parsed, status: 'available', error: null };
    } catch {
      try {
        storage.removeItem(STORAGE_KEY);
      } catch {
        return { data: null, status: 'unavailable', error: 'Saved ChronoCounter data could not be recovered.' };
      }

      return { data: null, status: 'recovered', error: 'Saved ChronoCounter data was corrupted and has been reset.' };
    }
  },

  save(state) {
    const storage = getLocalStorage();

    if (!storage) {
      return { data: null, status: 'unavailable', error: 'Local storage is unavailable for this session.' };
    }

    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(state));
      return { data: state, status: 'available', error: null };
    } catch {
      return { data: null, status: 'unavailable', error: 'ChronoCounter changes could not be saved locally.' };
    }
  },

  clear() {
    const storage = getLocalStorage();

    if (!storage) {
      return { data: null, status: 'unavailable', error: 'Local storage is unavailable for this session.' };
    }

    try {
      storage.removeItem(STORAGE_KEY);
      return { data: null, status: 'available', error: null };
    } catch {
      return { data: null, status: 'unavailable', error: 'ChronoCounter storage could not be cleared.' };
    }
  },
};
