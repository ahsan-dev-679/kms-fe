import { attachToken, custAxios } from "@/configs/axios.config";
import { notifications } from "@/data/data";
import { create } from "zustand";

export const useAuthStore = create((set) => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  return {
    user: token && userData ? { token: token, userData: userData } : null,
    isAuthenticated: !!token,
    count: 0,
    notifications: [],
    nLoader: false,

    setUser: (user) => set({ user, isAuthenticated: !!user }),
    setAuthenticated: (isAuthenticated) => ({ isAuthenticated }),

    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      set({ isAuthenticated: false, user: null });
    },
    fetchNotifications: async () => {
      try {
        set({ nLoader: true });
        attachToken();
        const res = await custAxios.get(`/notification`);
        if (res?.data?.success) {
          set({ notifications: res?.data?.data, nLoader: false });
          return true;
        }
      } catch (error) {
        set({ nLoader: false });
        console.log(error);
      }
    },
    readAllNotifications: async () => {
      try {
        attachToken();
        const res = await custAxios.get(`/notification/unread-count`);
        if (res?.data?.success) {
          set({ count: res?.data?.data });
          return true;
        }
      } catch (error) {
        console.log(error);
      }
    },
    handleNotificationCount: () => {
      set((state) => ({
        count: state.count + 1,
      }));
    },
  };
});
