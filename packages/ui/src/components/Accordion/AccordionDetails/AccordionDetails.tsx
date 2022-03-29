import * as React from 'react';
import { useExpand } from '../../../Provider/Accordion/ExpandContext';
import * as S from './AccordionDetails.styled';

export const AccordionDetails: React.FC = ({ children }) => {
  const { isExpand } = useExpand();
  return <S.Container isExpand={isExpand}>{children}</S.Container>;
};
