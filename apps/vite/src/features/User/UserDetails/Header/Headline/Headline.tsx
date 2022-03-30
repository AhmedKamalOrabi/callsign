import type { IuserDetail } from '@/types/IuserDetail';

import * as S from './Headline.styed';

type HeadlineProps = Pick<IuserDetail, 'name' | 'website'>;

export default function Headline({ name, website }: HeadlineProps) {
  return (
    <S.Container>
      <S.NameHeader>{name}</S.NameHeader>
      <S.JobHeader>{website}</S.JobHeader>
    </S.Container>
  );
}
