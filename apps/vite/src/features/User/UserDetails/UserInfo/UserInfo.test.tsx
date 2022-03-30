import { expect, it } from 'vitest';

import { mount, screen } from '@/test/support';
import type { IuserDetail } from '@/types/IuserDetail';

import UserInfo from './UserInfo';

const imageUrl = 'https://www.w3schools.com/w3css/img_avatar4.png';

it('should display UserInfo', () => {
  const user: IuserDetail = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    imageUrl,
  };

  mount(<UserInfo user={user} />);

  for (const key of Object.keys(user)) {
    expect(screen.getByText(user[key as keyof IuserDetail])).toBeDefined();
  }
});
