import { Route, Routes } from 'react-router-dom';

import Frame from '@/layout/Frame/Frame';

import Landing from './Landing';

export default () => (
  <Routes>
    <Route path="/" element={<Frame />}>
      <Route index element={<Landing />} />
      <Route path="*" element={<Landing />} />
    </Route>
  </Routes>
);
