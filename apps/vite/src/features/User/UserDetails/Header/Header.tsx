
import type { IuserDetail } from '@/types/IuserDetail';

import CircleImage from './CircleImage/CircleImage';
import * as S from './Header.styled';
import Headline from './Headline/Headline';

type HeaderProps = Pick<IuserDetail, 'name' | 'job' | 'imageUrl'>;

export default function Header({ name, job, imageUrl }: HeaderProps) {
  return (
    <S.Container>
      <CircleImage imageUrl={imageUrl} />
      <Headline name={name} job={job} />
    </S.Container>
  );
}
