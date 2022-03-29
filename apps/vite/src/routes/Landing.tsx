import { Accordion, AccordionDetails, AccordionSummary } from '@callsign/ui';

import UserDetails from '@/features/User/UserDetails/UserDetails';
import UserSummary from '@/features/User/UserSummary/UserSummary';
import type { IuserDetail } from '@/types/IuserDetail';

const users: IuserDetail[] = [
  {
    name: 'Jackie Stewart',
    email: 'jackie.stewart@a2finance.com',
    phoneNumber: '+44 779 206 3364',
    group: 'Administrators',
    lastactive: '25/01/2018T23:00:00Z',
    imageUrl: 'https://www.w3schools.com/howto/img_avatar.png',
    job: 'Developer',
    location: 'Cairo',
  },
  {
    name: 'Lewis Hamilton',
    email: 'lewis.hamilton@a2finance.com',
    phoneNumber: '+44 779 206 7748',
    group: 'Analyst',
    lastactive: '17/01/2018T12:18:43Z',
    imageUrl: 'https://www.w3schools.com/howto/img_avatar.png',
    location: 'Cairo',
    job: 'Developer',
  },
  {
    name: 'Jenson Button',
    email: 'jenson.button@a2finance.com',
    phoneNumber: '+44 779 112 2765',
    group: 'Administrators',
    lastactive: '23/01/2018T16:46:10Z',
    imageUrl: 'https://www.w3schools.com/howto/img_avatar.png',
    location: 'Cairo',
    job: 'Developer',
  },
  {
    name: 'Damon Hill',
    email: 'damon.hill@a2finance.com',
    phoneNumber: '+44 782 280 0924',
    group: 'Approver',
    lastactive: '23/01/2018T16:46:01Z',
    imageUrl: 'https://www.w3schools.com/howto/img_avatar.png',
    job: 'Developer',
    location: 'Cairo',
  },
];

export default function Landing() {
  return (
    <>
      {users.map((user, index: number) => {
        const { name, group, lastactive } = user;

        return (
          <Accordion key={`${name}-${index}`}>
            <AccordionSummary>
              <UserSummary name={name} group={group} lastactive={lastactive} />
            </AccordionSummary>
            <AccordionDetails>
              <UserDetails user={user} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}
