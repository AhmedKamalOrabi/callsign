import { Checkbox, StopPropogation } from '@callsign/ui';

import type { IuserDetail } from '@/types/IuserDetail';

type UserSummaryProps = Pick<IuserDetail, 'name' | 'group' | 'lastactive'>;

export default function UserSummary({
  name,
  group,
  lastactive,
}: UserSummaryProps) {
  return (
    <>
      <StopPropogation>
        <Checkbox />
      </StopPropogation>
      <div>{name}</div>
      <div>{group}</div>
      <div>{lastactive}</div>
    </>
  );
}
