import type { IuserDetail } from '@/types/IuserDetail';

import * as S from './CircleImage.styled';

type CircleImageProps = Pick<IuserDetail, 'imageUrl' | 'name'>;

export default function CircleImage({ imageUrl, name }: CircleImageProps) {
  return <S.Container src={imageUrl} alt={name} />;
}
