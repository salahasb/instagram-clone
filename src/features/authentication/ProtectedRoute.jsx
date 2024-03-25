import { useEffect } from 'react';
import { useLoggedInUser } from './authQueries&Mutations';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { user, isLoading, error } = useLoggedInUser();

  const navigate = useNavigate();

  // console.log(user);
  // console.log(error);

  useEffect(() => {
    console.log('protected route effect');

    if (!user && !isLoading) navigate('/auth');
  }, [user, isLoading, navigate]);

  if (isLoading)
    return <div className="text-8xl text-red-500">Loading......</div>;

  if (!user) return;

  return children;
}

export default ProtectedRoute;
