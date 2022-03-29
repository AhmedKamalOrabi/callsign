import { FormattedMessage } from 'react-intl';

import type { IuserDetail } from '@/types/IuserDetail';

import * as S from './UserInfo.styled';

type UserInfoProps = {
  user: IuserDetail;
};

export default function UserInfo({ user }: UserInfoProps) {
  return (
    <S.Container>
      <S.Heading>
        <FormattedMessage
          id="features.user.userDetail.userInfo.title"
          defaultMessage="user details"
        />
      </S.Heading>
      <S.List>
        <S.ListItem>
          <S.ListItemKey>Name</S.ListItemKey>
          <S.ListItemValue>{user.name}</S.ListItemValue>
        </S.ListItem>
      </S.List>
    </S.Container>
  );
}
