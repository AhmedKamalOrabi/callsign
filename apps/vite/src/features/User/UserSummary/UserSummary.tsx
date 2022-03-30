import { Checkbox, StopPropogation } from '@callsign/ui';

import type { IuserDetail } from '@/types/IuserDetail';

type UserSummaryProps = Pick<IuserDetail, 'name' | 'username' | 'email'>;

export default function UserSummary({
  name,
  username,
  email,
}: UserSummaryProps) {
  return (
    <>
      <StopPropogation>
        <Checkbox />
      </StopPropogation>
      <div>{name}</div>
      <div>{username}</div>
      <div>{email}</div>
    </>
  );
}
