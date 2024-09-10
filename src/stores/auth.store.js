import { create } from "zustand";

export const useAuthStore = create((set) => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  return {
    user: token && userData ? { token: token, userData: userData } : null,
    isAuthenticated: !!token,

    setUser: (user) => set({ user, isAuthenticated: !!user }),
    setAuthenticated: (isAuthenticated) => ({ isAuthenticated }),

    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      set({ isAuthenticated: false, user: null });
    },
  };
});
