import * as React from 'react';
import * as S from './Checkbox.styled';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Checkbox: React.VFC = () => {
  return <S.Container type="checkbox" />;
};
