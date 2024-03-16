import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import LoginPage from './pages/LoginPage';

// initializing React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoginPage />
      <ReactQueryDevtools buttonPosition="bottom-left" initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
