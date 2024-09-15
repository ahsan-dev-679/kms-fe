import {
  custAxios,
  attachTokenWithFormAxios,
  formAxios,
  attachToken,
} from "@/configs/axios.config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { successMessage, errorMessage } from "@/utils/toast";
import { useAuthStore } from "@/stores/auth.store";

export const useAttendance = () => {
  const { data, ...rest } = useQuery(["attendance", id], {
    queryFn: async () => {
      attachToken();
      const data = await custAxios.post("/chef/attendance", {
        params: { limit: 999, page: 1 },
      });
      return data?.data?.data;
    },

    // queryKey: ["attendance"],
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: true,
  });
  return { meals: data, ...rest };
};

export const useMarkAttendance = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      attachToken();
      const res = await custAxios.get(`/chef/mark-attendance`);
      return res?.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        successMessage("Attendance marked successfully for today.");
        queryClient.invalidateQueries("attendance");
      }
    },
    onError: (error) => {
      errorMessage(error?.response?.data?.message);
    },
  });
};
