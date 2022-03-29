import styled from 'styled-components';

const Container = styled.div`
  background: #eee;
  padding: 100px 20px 0px;
`;

const Heading = styled.h5`
  font-weight: normal;
  text-transform: uppercase;
`;

const List = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
`;

const ListItemKey = styled.b`
  text-transform: capitalize;
`;

const ListItemValue = styled.span`
  color: #8c8c8c;
`;

export { Container, Heading, List, ListItem, ListItemKey, ListItemValue };
