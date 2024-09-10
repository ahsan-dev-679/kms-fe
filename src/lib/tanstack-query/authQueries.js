import {
  custAxios,
  attachTokenWithFormAxios,
  formAxios,
  attachToken,
} from "@/configs/axios.config";
import { useMutation } from "@tanstack/react-query";
import { successMessage, errorMessage } from "@/utils/toast";
import { useAuthStore } from "@/stores/auth.store";

export const useLogin = () => {
  const { setUser, setAuthenticated } = useAuthStore();
  return useMutation({
    mutationFn: async (values) => {
      const res = await custAxios.post(`/auth/login`, values);
      return res?.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        const userData = { token: data.data.token, userData: data.data.user };
        localStorage.setItem("user", JSON.stringify(data?.data?.user));
        localStorage.setItem("token", data?.data?.token);
        setUser(userData);
        setAuthenticated(true);
        successMessage("Login Success");
      }
    },
    onError: (error) => {
      errorMessage(error?.response?.data?.message);
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: async (values) => {
      const res = await custAxios.post(`/auth/register`, values);
      return res?.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        successMessage("Account created successfully");
      }
    },
    onError: (error) => {
      errorMessage(error?.response?.data?.message);
    },
  });
};

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: async (values) => {
      const res = await custAxios.post(`/auth/forgotPassword`, values);
      return res?.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        successMessage("OTP sent to your email");
      }
    },
    onError: (error) => {
      errorMessage(error?.response?.data?.message);
    },
  });
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: async (values) => {
      const res = await custAxios.put(`/auth/resetPassword`, values);
      return res?.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        successMessage("Password updated successfully");
      }
    },
    onError: (error) => {
      errorMessage(
        error?.response?.data?.message || "Whoops! Something went wrong"
      );
    },
  });
};

export const useUpdateProfile = () => {
  const { setUser, setAuthenticated } = useAuthStore();
  return useMutation({
    mutationFn: async (values) => {
      attachTokenWithFormAxios();
      const res = await formAxios.put(`/auth/updateAdminProfile`, values);
      return res?.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        console.log("data", data?.data);
        const userData = { userData: data.data };
        localStorage.setItem("user", JSON.stringify(data?.data));
        setUser(userData);
        successMessage("Profile Updated successfully");
      }
    },
    onError: (error) => {
      errorMessage(error?.response?.data?.message);
    },
  });
};
