import {
  custAxios,
  attachTokenWithFormAxios,
  formAxios,
  attachToken,
} from "@/configs/axios.config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { successMessage, errorMessage } from "@/utils/toast";
import { useAuthStore } from "@/stores/auth.store";

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
