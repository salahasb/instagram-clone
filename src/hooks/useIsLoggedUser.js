import { useParams } from 'react-router-dom';
import { useLoggedInUser } from '../features/authentication/authQueries&Mutations';

function useIsLoggedUser() {
  // check if the current profile the same as the logged-in profile by its username
  const {
    user: { username },
  } = useLoggedInUser();

  const { username: usernameParam } = useParams();

  const isLoggedUser = usernameParam === username;
  return isLoggedUser;
}

export default useIsLoggedUser;
