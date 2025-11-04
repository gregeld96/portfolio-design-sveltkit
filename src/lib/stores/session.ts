import { writable } from "svelte/store";
import { goto } from '$app/navigation';
import { loading } from './modal'

interface AuthState {
    token: string | null;
    user: { id: string; email: string } | null;
}

function createAuthStore() {
    const { subscribe, set, update } = writable<AuthState>({
        token: null,
        user: null
    });

    return {
        subscribe,
        login: (token: string, user: any) => {
            // Save in memory
            set({ token, user });

            // Also persist in localStorage
            localStorage.setItem("auth", JSON.stringify({ token, user }));
        },
        logout: (locationRedirect?: string) => {
            set({ token: null, user: null });
            localStorage.removeItem("auth");

            if(locationRedirect) {
                window.location.href = locationRedirect;
            } else {
                location.reload(); 
            }
        },
        restore: () => {
            const saved = localStorage.getItem("auth");
            if (saved) {
                set(JSON.parse(saved));
            }
        }
    };
}

export const auth = createAuthStore();