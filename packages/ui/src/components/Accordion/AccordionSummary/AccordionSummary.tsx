import * as React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import {
  BaseProps,
  TagProps,
  AccessibilityProps,
} from '../../../types/BaseProps';
import { useExpand } from '../../../Provider/Accordion/ExpandContext';
import * as S from './AccordionSummary.styled';

type AccordionSummaryProps = BaseProps &
  TagProps &
  Pick<AccessibilityProps, 'aria-label' | 'aria-controls'> & {
    children: React.ReactNode;
    expandIcon?: React.ReactNode;
  };

export const AccordionSummary: React.VFC<AccordionSummaryProps> = ({
  children,
  id,
  style,
  className,
  expandIcon,
}) => {
  const { isExpand, toggleExpand } = useExpand();

  return (
    <S.Container
      id={id}
      style={style}
      className={className}
      onClick={toggleExpand}
    >
      {children}
      <S.IconWrapper isExpand={isExpand}>
        {expandIcon ? expandIcon : <FaChevronDown />}
      </S.IconWrapper>
    </S.Container>
  );
};
