import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import LoginPage from './pages/LoginPage';
import AppLayout from './components/AppLayout';

// React Router

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <div>home</div> },
      { path: '/:id', element: <div>profile</div> },
    ],
  },
]);

// initializing React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <LoginPage /> */}
      <ReactQueryDevtools
        panelProps={{
          className: '!text-[18px]',
        }}
      />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
