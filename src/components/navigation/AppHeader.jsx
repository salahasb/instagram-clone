function AppHeader({ children }) {
  return (
    <header className="425:hidden fixed top-0 flex h-[4.7rem] w-full items-center gap-6 border border-gray-200 px-5 py-3">
      {children}
    </header>
  );
}

export default AppHeader;
