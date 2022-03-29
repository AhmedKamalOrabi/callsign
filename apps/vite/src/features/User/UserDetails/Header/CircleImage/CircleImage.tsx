import type { IuserDetail } from '@/types/IuserDetail';

import * as S from './CircleImage.styled';

type CircleImageProps = Pick<IuserDetail, 'imageUrl'>;

export default function CircleImage({ imageUrl }: CircleImageProps) {
  return <S.Container src={imageUrl} />;
}
