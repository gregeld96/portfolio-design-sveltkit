import { writable } from "svelte/store";

export const authModalOpen = writable(false);
export const authModalTab = writable<"login" | "register">("login");

export const profilePhotoModalOpen = writable(false);

export function openAuthModal(tab: "login" | "register" = "login") {
  authModalTab.set(tab);
  authModalOpen.set(true);
}

export function closeAuthModal() {
  authModalOpen.set(false);
}

export function openProfilePhotohModal() {
  profilePhotoModalOpen.set(true);
}

export function closeProfilePhotohModal() {
  profilePhotoModalOpen.set(false);
}

function createLoadingStore() {
    const { subscribe, update } = writable<boolean>(true);
  
    return {
      subscribe,
      show: () => {
        update(() => true);
      },
      close: () => {
        update(() => false);
      }
    };
  }
  
export const loading = createLoadingStore();