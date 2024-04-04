import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  checkEmail,
  getLoggedInUser,
  login,
  logout,
  signup,
} from '../../services/authApi';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGGED_USER } from '../../utils/constants';

export function useLoggedInUser() {
  const { pathname } = useLocation();

  const {
    data: user,
    isLoading,
    isFetching: isFetchingLoggedUser,
    error,
    remove,
  } = useQuery({
    queryKey: [LOGGED_USER],
    queryFn: getLoggedInUser,
    refetchOnWindowFocus: () => pathname !== '/auth',
  });

  return { user, isLoading, isFetchingLoggedUser, error, remove };
}

export function useLogin() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async ({ email, password }) => {
      await login(email, password);

      return checkEmail(email);
    },

    onSuccess: (data) => {
      // 1 store the user info in the client
      navigate('/');
    },
  });

  return mutation;
}

export function useSignup() {
  const navigate = useNavigate();

  const {
    isLoading,
    mutate: signupUser,
    error,
  } = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      // plan out what to do
      navigate('/');
    },
  });

  return { isLoading, signupUser, error };
}

export function useLogout() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { isLoading, mutate: logoutUser } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries([LOGGED_USER]);
      navigate('/auth');
    },
  });

  return { isLoading, logoutUser };
}
