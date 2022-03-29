import type { IuserDetail } from '@/types/IuserDetail';

import * as S from './Headline.styed';

type HeadlineProps = Pick<IuserDetail, 'name' | 'job'>;

export default function Headline({ name, job }: HeadlineProps) {
  return (
    <S.Container>
      <S.NameHeader>{name}</S.NameHeader>
      <S.JobHeader>{job}</S.JobHeader>
    </S.Container>
  );
}
