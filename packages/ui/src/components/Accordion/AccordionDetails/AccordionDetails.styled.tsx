import styled from 'styled-components';

type ContainerProps = {
  isExpand: boolean;
};

const Container = styled.div<ContainerProps>`
  transition: opacity 0.3s ease-out, max-height 0.8s ease-out;
  height: auto;
  opacity: ${({ isExpand }) => (isExpand ? 1 : 0)};
  max-height: ${({ isExpand }) => (isExpand ? 1 : 0)};
`;

export { Container };
