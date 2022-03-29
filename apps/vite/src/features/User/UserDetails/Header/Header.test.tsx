import { expect, it } from 'vitest';

import { mount, screen } from '@/test/support';

import Header from './Header';

type User = {
  name: string;
  job: string;
  imageUrl: string;
};

it('should display Header', () => {
  const user: User = {
    name: 'Ahmed',
    job: 'Admin',
    imageUrl: 'https://www.w3schools.com/howto/img_avatar.png',
  };

  mount(<Header name={user.name} job={user.job} imageUrl={user.imageUrl} />);

  for (const key of Object.keys(user)) {
    expect(screen.getByText(user[key as keyof User])).toBeDefined();
  }
});
