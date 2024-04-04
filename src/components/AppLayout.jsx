import { Outlet } from 'react-router-dom';
import NavBar from './navigation/NavBar';

function AppLayout() {
  return (
    <div className="max-736:flex-col flex h-dvh">
      <main className="736:order-1 736:px-10 grow overflow-auto">
        <Outlet />
      </main>

      <NavBar />
    </div>
  );
}

export default AppLayout;
