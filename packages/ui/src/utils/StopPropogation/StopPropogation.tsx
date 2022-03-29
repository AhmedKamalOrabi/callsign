import * as React from 'react';

import * as S from './StopPropogation.styled';

export const StopPropogation: React.FC = ({ children }) => (
  <S.Container
    onClick={(e) => e.stopPropagation()}
    onFocus={(e) => e.stopPropagation()}
  >
    {children}
  </S.Container>
);
