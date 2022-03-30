import styled from 'styled-components';

const Container = styled.div`
  background: #eee;
  padding: 120px 40px 40px;
`;

const Heading = styled.h5`
  font-weight: normal;
  text-transform: uppercase;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(10px, 1fr));
`;

const ListItem = styled.div`
  display: grid;
  gap: 12px;
`;

const ListItemKey = styled.b`
  text-transform: capitalize;
  font-weight: bold;
`;

const ListItemValue = styled.span`
  color: #8c8c8c;
  font-weight: bold;
`;

export { Container, Heading, List, ListItem, ListItemKey, ListItemValue };
