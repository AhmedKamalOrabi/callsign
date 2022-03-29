import styled from 'styled-components';

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  min-height: 48px;
  border: none;
  background: transparent;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    background: #ccc;
    cursor: pointer;
  }
`;

type IconWrapperProps = {
  isExpand: boolean;
};

const IconWrapper = styled.span<IconWrapperProps>`
  transform: ${({ isExpand }) =>
    isExpand ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export { Container, IconWrapper };
