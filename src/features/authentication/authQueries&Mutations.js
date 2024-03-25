import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getLoggedInUser, login, logout, signup } from '../../services/authApi';
import { useNavigate } from 'react-router-dom';
import { getUserByEmail } from '../../services/usersApi';

export default function useLoggedInUser() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getLoggedInUser,
  });

  return { user, isLoading, error };
}

export function useLogin() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async ({ email, password }) => {
      //   try {
      await login(email, password);

      return getUserByEmail(email);
    },
    onSuccess: (data) => {
      // 1 store the user info in the client
      navigate('/');
      // 2 navigate the user to feed page
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
      console.log(data);
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
      queryClient.removeQueries(['user']);
      navigate('/auth');
    },
  });
  return { isLoading, logoutUser };
}
