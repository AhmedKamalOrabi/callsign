import type { IuserDetail } from '@/types/IuserDetail';

import CircleImage from './CircleImage/CircleImage';
import * as S from './Header.styled';
import Headline from './Headline/Headline';

type HeaderProps = Pick<IuserDetail, 'name' | 'website' | 'imageUrl'>;

export default function Header({ name, website, imageUrl }: HeaderProps) {
  return (
    <S.Container>
      <CircleImage imageUrl={imageUrl} name={name} />
      <Headline name={name} website={website} />
    </S.Container>
  );
}
