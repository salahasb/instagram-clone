import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './navigation/NavBar';

function AppLayout() {
  return (
    <div className="flex h-dvh max-736:flex-col">
      <main className="grow overflow-auto 736:order-1 736:px-10">
        <Outlet />
      </main>

      <NavBar />
    </div>
  );
}

export default AppLayout;
