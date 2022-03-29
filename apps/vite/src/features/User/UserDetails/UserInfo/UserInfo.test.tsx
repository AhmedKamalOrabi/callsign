import { expect, it } from 'vitest';

import { mount, screen } from '@/test/support';
import type { IuserDetail } from '@/types/IuserDetail';

import UserInfo from './UserInfo';

it('should display UserInfo', () => {
  const user: IuserDetail = {
    name: 'Damon Hill',
    email: 'damon.hill@a2finance.com',
    phoneNumber: '+44 782 280 0924',
    group: 'Approver',
    lastactive: '23/01/2018T16:46:01Z',
    imageUrl: 'https://www.w3schools.com/howto/img_avatar.png',
    job: 'Developer',
    location: 'Cairo',
  };

  mount(<UserInfo user={user} />);

  for (const key of Object.keys(user)) {
    expect(screen.getByText(user[key as keyof IuserDetail])).toBeDefined();
  }
});
