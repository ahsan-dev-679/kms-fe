import {
  custAxios,
  attachTokenWithFormAxios,
  formAxios,
  attachToken,
} from "@/configs/axios.config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { successMessage, errorMessage } from "@/utils/toast";
import { useAuthStore } from "@/stores/auth.store";

export const useAttendance = (id) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      attachToken();
      const data = await custAxios.post(`/chef/get-attendance/${id}`, {
        params: { limit: 999, page: 1 },
      });
      return data?.data?.data;
    },

    queryKey: ["attendance", id],
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: true,
  });
  return { attendanceList: data, ...rest };
};
export const useChefList = () => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      attachToken();
      const data = await custAxios.get(`/chef`, {
        params: { limit: 999, page: 1 },
      });
      return (data?.data?.data).reverse();
    },

    queryKey: ["chef"],
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: true,
  });
  return { chefList: data, ...rest };
};

export const useMarkAttendance = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      attachToken();
      const res = await custAxios.get(`/chef/attendance/mark`);
      return res?.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        successMessage("Attendance marked successfully for today.");
        queryClient.invalidateQueries("attendance");
      }
    },
    onError: (error) => {
      errorMessage(error?.response?.data?.message || "Something went wrong");
    },
  });
};

export const useNotifyLowStock = () => {
  return useMutation({
    mutationFn: async (id) => {
      attachToken();
      const res = await custAxios.get(`/chef/low-stock/${id}`);
      return res?.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        successMessage("Notifed to admin successfully.");
      }
    },
    onError: (error) => {
      errorMessage(error?.response?.data?.message || "Something went wrong");
    },
  });
};
