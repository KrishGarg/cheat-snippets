import create from "zustand";

const useStore = create((set) => ({
  // Authentication status of the client.
  isAuthenticated: false,
  setAuthStatus: (setTo) => set((_) => ({ isAuthenticated: setTo })),

  // Authenticated user's information.
  user: null,
  setUser: (setTo) => set((_) => ({ user: setTo })),
}));

export default useStore;
