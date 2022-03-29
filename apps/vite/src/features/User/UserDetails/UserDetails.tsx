import type { IuserDetail } from '@/types/IuserDetail';

import Header from './Header/Header';
import * as S from './UserDetails.styled';
import UserInfo from './UserInfo/UserInfo';


type UserDetailsProps = {
  user: IuserDetail;
};

export default function UserDetails({ user }: UserDetailsProps) {
  const { name, job, imageUrl } = user;

  return (
    <S.Container>
      <Header name={name} job={job} imageUrl={imageUrl} />
      <UserInfo user={user} />
    </S.Container>
  );
}
