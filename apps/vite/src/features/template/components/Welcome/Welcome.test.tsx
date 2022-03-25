import { expect, it } from 'vitest';

import { mount, screen } from '@/test/support';

import Welcome from './Welcome';

it('should render welcome', () => {
  mount(<Welcome />);

  expect(screen.getByText('Hello ya Ragab')).toBeDefined();
  expect(screen.getByRole('button', { name: 'Boop' })).toBeDefined();
});
