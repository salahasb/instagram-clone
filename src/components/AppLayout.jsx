import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="flex flex-col gap-10 text-5xl">
      <p className="">App Layout</p>
      <Outlet />
    </div>
  );
}

export default AppLayout;
