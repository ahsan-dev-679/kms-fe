import { custAxios, attachToken } from "@/configs/axios.config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { successMessage, errorMessage } from "@/utils/toast";

export const useCheckout = () => {
  return useMutation({
    mutationFn: async (value) => {
      attachToken();
      const res = await custAxios.post(`/order/cart/checkout`, value);
      return res?.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        successMessage("Checkout successfully");
      }
    },
    onError: (error) => {
      errorMessage(error?.response?.data?.message || "Something went wrong");
    },
  });
};

export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (value) => {
      attachToken();
      const res = await custAxios.post(`/order`, value);
      return res?.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        successMessage("Order Created successfully");
        queryClient.invalidateQueries("orders");
      }
    },
    onError: (error) => {
      errorMessage(error?.response?.data?.message || "Something went wrong");
    },
  });
};

export const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (value) => {
      console.log(value);

      attachToken();
      const res = await custAxios.put(`/order/update-status/${value.id}`, {
        status: value.status,
      });
      return res?.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        successMessage("Order Status updated successfully");
        queryClient.invalidateQueries("orders");
      }
    },
    onError: (error) => {
      errorMessage(error?.response?.data?.message || "Something went wrong");
    },
  });
};

export const useOrdersList = () => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      attachToken();
      const data = await custAxios.get("/order");
      return data?.data?.data;
    },

    queryKey: ["orders"],
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: true,
  });
  return { ordersList: data, ...rest };
};

export const useOrderDetail = (id) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      attachToken();
      const data = await custAxios.get(`/order/${id}`);
      return data?.data?.data;
    },
    queryKey: ["order-detail", id],
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: true,
  });
  return { orderDetail: data, ...rest };
};
