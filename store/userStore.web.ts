import { create } from "zustand";

// this doesn't use persistent storage because the metro bunder doesn't transpile it correctly
// one day figure out how to respolve the import.meta issue when importing from zustand/middleware for the persistent storage options.
type UserStore = {
  hasFinishedOnboarding: boolean;
  toggleHasOnboarded: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  hasFinishedOnboarding: false,
  toggleHasOnboarded: () =>
    set((state) => ({
      ...state,
      hasFinishedOnboarding: !state.hasFinishedOnboarding,
    })),
}));
