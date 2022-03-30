import { expect, it } from 'vitest';

import { mount, screen } from '@/test/support';
import type { IuserDetail } from '@/types/IuserDetail';

import Header from './Header';

type User = Pick<IuserDetail, 'name' | 'website' | 'imageUrl'>;
it('should display Header', () => {
  const user: User = {
    name: 'Ahmed',
    website: 'google.com',
    imageUrl: 'https://www.w3schools.com/howto/img_avatar.png',
  };

  mount(
    <Header name={user.name} website={user.website} imageUrl={user.imageUrl} />,
  );

  expect(screen.getByText(user.name)).toBeDefined();
  expect(screen.getByText(user.website)).toBeDefined();
  expect(screen.getByRole('img', { name: user.name })).toBeDefined();
});
