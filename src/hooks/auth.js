import { useShallow } from "zustand/react/shallow";

export const useAuth = () => {
  const [isAuthenticated, loading] = useAuthStore(
    useShallow((state) => [state.isAuthenticated, state.loading])
  );
  if (isAuthenticated) {
    return true;
  } else {
    return false;
  }
};

export const useGetToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    return false;
  }
};

export const useGetUserData = () => {
  const [isAuthenticated, user] = useAuthStore(
    useShallow((state) => [state.isAuthenticated, state.user])
  );
  if (isAuthenticated && user) {
    return user?.userData;
  } else {
    return null;
  }
};
export const useGetRole = () => {
  const [isAuthenticated, user] = useAuthStore(
    useShallow((state) => [state?.isAuthenticated, state?.user])
  );
  if (isAuthenticated && user) {
    return user?.userData?.role;
  } else {
    return null;
  }
};
