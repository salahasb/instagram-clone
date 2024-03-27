import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function AppLayout() {
  return (
    <div className="425:flex-row flex h-dvh flex-col">
      <main className="425:order-2 flex-grow">
        <Outlet />
      </main>

      <NavBar />
    </div>
  );
}

export default AppLayout;
