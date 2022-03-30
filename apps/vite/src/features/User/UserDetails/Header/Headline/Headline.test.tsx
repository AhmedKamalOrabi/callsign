import { expect, it } from 'vitest';

import { mount, screen } from '@/test/support';
import type { IuserDetail } from '@/types/IuserDetail';

import Headline from './Headline';

type User = Pick<IuserDetail, 'name' | 'website'>;

it('should display Headline', () => {
  const user: User = {
    name: 'Ahmed',
    website: 'facebook.com',
  };

  mount(<Headline name={user.name} website={user.website} />);

  for (const key of Object.keys(user)) {
    expect(screen.getByText(user[key as keyof User])).toBeDefined();
  }
});
