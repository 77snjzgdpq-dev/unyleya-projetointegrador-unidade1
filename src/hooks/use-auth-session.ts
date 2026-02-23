import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { AuthSessionType } from './types'

export const useAuthSessionStore = create<AuthSessionType>()(
    persist(
        (set) => ({
            token: "",
            setToken: (novoToken) => set((state) => ({...state, token: novoToken})),
            clearToken: () => set((state) => ({...state, token: ""}))
        }),
        {
            name: "@auth-session-store",
        }
    )
);
