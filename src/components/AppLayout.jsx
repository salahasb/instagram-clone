import { Outlet } from 'react-router-dom';
import { useLogout } from '../features/authentication/authQueries&Mutations';
import Spinner from './Spinner';
import Button from './Button';

function AppLayout() {
  const { isLoading, logoutUser } = useLogout();
  return (
    <div className="flex flex-col gap-10 text-5xl">
      <p className="">App Layout</p>
      <Outlet />

      <Button className="w-fit" onClick={logoutUser}>
        {isLoading ? <Spinner /> : 'Logout'}
      </Button>
    </div>
  );
}

export default AppLayout;
