import { writable } from "svelte/store";

export type Toast = {
  id: number;
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
};

function createToastStore() {
  const { subscribe, update } = writable<Toast[]>([]);

  return {
    subscribe,
    show: (message: string, type: Toast["type"] = "info", duration = 3000) => {
      const id = Date.now();
      update((toasts) => [...toasts, { id, message, type, duration }]);

      // auto remove after duration
      setTimeout(() => {
        update((toasts) => toasts.filter((t) => t.id !== id));
      }, duration);
    },
  };
}

export const toast = createToastStore();
