import { custAxios, attachToken } from "@/configs/axios.config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { successMessage, errorMessage } from "@/utils/toast";

export const useCategory = () => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      attachToken();
      const data = await custAxios.get("/meals/category/get");
      return data?.data?.data;
    },

    queryKey: ["categories"],
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: true,
  });
  return { categories: data, ...rest };
};
export const useStats = () => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      attachToken();
      const data = await custAxios.get("/dashboard");
      console.log("data", data?.data?.data);
      return data?.data?.data;
    },

    queryKey: ["stats"],
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: true,
  });
  return { stats: data, ...rest };
};

export const useIncomeAnalytics = (filters) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      attachToken();
      const data = await custAxios.get("/dashboard/income", {
        params: filters,
      });console.log("1f",data?.data?.data)
      return data?.data?.data;
    },
    queryKey: ["icome", filters],
    refetchOnWindowFocus: false,
    // staleTime: Infinity,
    retry: 3,
  });console.log("1",rest)
  return { incomeData: data, ...rest };
};
export const useOrdersAnalytics = (filters) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      attachToken();
      const data = await custAxios.get("/dashboard/orders", {
        params: filters,
      });
      return data?.data?.data;
    },
    queryKey: ["order-analytics", filters],
    refetchOnWindowFocus: false,
    // staleTime: Infinity,
    retry: 3,
  });
  return { ordersAnalyticsData: data, ...rest };
};

export const useNotification = () => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      attachToken();
      const data = await custAxios.get("/notification");
      return data?.data?.data;
    },

    queryKey: ["notifciaton"],
    refetchOnWindowFocus: false,
    retry: true,
  });
  return { notifications: data, ...rest };
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (value) => {
      attachToken();
      const res = await custAxios.post(`/meals/category`, value);
      return res?.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        successMessage("Category created successfully");
        queryClient.invalidateQueries("categories");
      }
    },
    onError: (error) => {
      errorMessage(error?.response?.data?.message || "Something went wrong");
    },
  });
};
