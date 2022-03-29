import { ErrorBoundary } from '@sentry/react';
import { Outlet } from 'react-router-dom';

import Fallback from '@/components/Fallback/Fallback';

export default function Frame() {
  return (
    <main>
      <ErrorBoundary fallback={Fallback} showDialog>
        <Outlet />
      </ErrorBoundary>
    </main>
  );
}
