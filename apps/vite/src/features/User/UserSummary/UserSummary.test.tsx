import { expect, it } from 'vitest';

import { mount, screen } from '@/test/support';

import UserSummary from './UserSummary';

type User = {
  name: string;
  group: string;
  lastactive: string;
};

it('should display usersummary', () => {
  const user: User = {
    name: 'Ahmed',
    group: 'Admin',
    lastactive: '25/01/2018T23:00:00Z',
  };

  mount(
    <UserSummary
      name={user.name}
      group={user.group}
      lastactive={user.lastactive}
    />,
  );

  for (const key of Object.keys(user)) {
    expect(screen.getByText(user[key as keyof User])).toBeDefined();
  }
});
