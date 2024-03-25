import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AuthPage from './pages/AuthPage';
import AppLayout from './components/AppLayout';
import ProtectedRoute from './features/authentication/ProtectedRoute';

// React Router

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
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
