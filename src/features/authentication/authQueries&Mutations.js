import { useMutation } from '@tanstack/react-query';
import { login, signup } from '../../services/authApi';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      // 0 store the user's Token in localStorage
      // 1 store the user info in the client
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
      // planout what to do
      navigate('/');
    },
  });

  return { isLoading, signupUser, error };
}
