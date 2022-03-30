import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import IntlProvider from '@/contexts/intl';
import StoreProvider from '@/contexts/store';
import Routes from '@/routes';

import './App.css';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <IntlProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </IntlProvider>
      </StoreProvider>
    </QueryClientProvider>
  );
}
