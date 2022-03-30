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
          {Object.keys(user).map((key) => (
            <S.ListItemKey key={key}>{key}</S.ListItemKey>
          ))}
        </S.ListItem>
        <S.ListItem>
          {Object.keys(user).map((key) => (
            <S.ListItemValue key={key}>
              {user[key as keyof IuserDetail]}
            </S.ListItemValue>
          ))}
        </S.ListItem>
      </S.List>
    </S.Container>
  );
}
