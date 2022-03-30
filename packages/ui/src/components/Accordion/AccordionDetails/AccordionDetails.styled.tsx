import styled from 'styled-components';

type ContainerProps = {
  isExpand: boolean;
};

const Container = styled.div<ContainerProps>`
  display: ${({ isExpand }) => (isExpand ? 'block' : 'none')};
  & > * {
    margin: 0px;
  }
`;

export { Container };
