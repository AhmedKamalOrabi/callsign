import { expect, it } from 'vitest';

import { mount, screen } from '@/test/support';

import Welcome from './Welcome';

it('should render welcome', () => {
  mount(<Welcome />);

  expect(screen.getByRole('heading', { name: 'Callsign portal' })).toBeDefined();
  expect(screen.getByText('Get started', { exact: false })).toBeDefined();
});
