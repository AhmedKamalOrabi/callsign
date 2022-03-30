import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

import IntlProvider from '@/contexts/intl';
import StoreProvider from '@/contexts/store';
import { localeAtom } from '@/store/locale';

type TestProviderProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export default function TestProvider({ children }: TestProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider values={[[localeAtom, 'en']]}>
        <IntlProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </IntlProvider>
      </StoreProvider>
    </QueryClientProvider>
  );
}
