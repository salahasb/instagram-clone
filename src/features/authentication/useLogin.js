import { useMutation } from "@tanstack/react-query";

function useLogin() {
	const {
		isLoading,
		error,
		mutate: login,
	} = useMutation({
		mutationFn:login
		onSuccess: () => {},
		onError: () => {},
	});
	return {
		isLoading,
		error,
		login,
	};
}

export default useLogin;
