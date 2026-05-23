import type { ChronoCounterAppBridge, ChronoCounterStore } from '../features/chronocounter-lab-k7p4/chronocounter-lab-k7p4.store';

declare global {
  interface Window {
    app?: ChronoCounterAppBridge;
  }
}

export function installChronoCounterLabK7p4Bridge(store: ChronoCounterStore): () => void {
  function sync() {
    if (typeof window !== 'undefined') {
      window.app = store.getBridge();
    }
  }

  sync();
  return store.subscribe(sync);
}
