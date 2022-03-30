import { Accordion, AccordionDetails, AccordionSummary } from '@callsign/ui';

import UserDetails from '@/features/User/UserDetails/UserDetails';
import UserSummary from '@/features/User/UserSummary/UserSummary';
import { useUsers } from '@/hooks/useUsers';
import type { IuserDetail } from '@/types/IuserDetail';

export default function Landing() {
  const { data: users, isLoading } = useUsers();

  if (isLoading || !users) return <div>Loading....</div>;

  return (
    <>
      {users.map((user: IuserDetail, index: number) => {
        const { name, username, email } = user;

        return (
          <Accordion key={`${name}-${index}`}>
            <AccordionSummary>
              <UserSummary name={name} username={username} email={email} />
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
