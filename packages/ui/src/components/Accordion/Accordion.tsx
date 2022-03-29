import * as React from 'react';
import { ExpandProvider } from '../../Provider/Accordion/ExpandContext';
import * as S from './Accordion.styled';

type AccordionProps = {
  children: React.ReactNode;
};
export const Accordion: React.VFC<AccordionProps> = ({ children }) => {
  return (
    <ExpandProvider>
      <S.Container>{children}</S.Container>
    </ExpandProvider>
  );
};
