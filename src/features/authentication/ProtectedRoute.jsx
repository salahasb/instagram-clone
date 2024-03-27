import { useEffect } from 'react';
import { useLoggedInUser } from './authQueries&Mutations';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../../components/LoadingPage';

function ProtectedRoute({ children }) {
  const { isLoading, error, remove } = useLoggedInUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      remove();
      navigate('/auth');
    }
  }, [error, remove, navigate]);

  if (isLoading) return <LoadingPage />;

  if (error) return;

  return children;
}

export default ProtectedRoute;
