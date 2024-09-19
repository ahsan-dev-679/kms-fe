import {
  custAxios,
  attachTokenWithFormAxios,
  formAxios,
  attachToken,
} from "@/configs/axios.config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { successMessage, errorMessage } from "@/utils/toast";
import { useAuthStore } from "@/stores/auth.store";

export const useMeals = () => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      attachToken();
      const data = await custAxios.get("/meals", {
        params: { limit: 999, page: 1 },
      });
      return data?.data?.data;
    },

    queryKey: ["meals"],
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: true,
  });
  return { meals: data, ...rest };
};

export const useCreateMeal = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (value) => {
      attachTokenWithFormAxios();
      const res = await formAxios.post(`/meals`, value);
      return res?.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        successMessage("Meal created successfully");
        queryClient.invalidateQueries("meals");
      }
    },
    onError: (error) => {
      errorMessage(error?.response?.data?.message || "Something went wrong");
    },
  });
};
export const deleteMeal = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      attachToken();
      const res = await custAxios.delete(`/meals/${id}`);
      return res?.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        successMessage("Meal deleted successfully");
        queryClient.invalidateQueries("meals");
      }
    },
    onError: (error) => {
      errorMessage(error?.response?.data?.message || "Something went wrong");
    },
  });
};
