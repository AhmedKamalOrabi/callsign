import { expect, it } from 'vitest';

import { mount, screen } from '@/test/support';
import type { IuserDetail } from '@/types/IuserDetail';

import UserSummary from './UserSummary';

type User = Pick<IuserDetail, 'name' | 'username' | 'email'>;

it('should display usersummary', () => {
  const user: User = {
    name: 'Ahmed',
    username: 'Ahmed Ragab',
    email: 'ahmed.ragab037@gmail.com',
  };

  mount(
    <UserSummary
      name={user.name}
      username={user.username}
      email={user.email}
    />,
  );

  for (const key of Object.keys(user)) {
    expect(screen.getByText(user[key as keyof User])).toBeDefined();
  }
});
