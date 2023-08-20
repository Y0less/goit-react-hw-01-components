import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;

  width: 400px;

  border: ${props => props.theme.border};
  background-color: ${props => props.theme.colors.cardColor};
  box-shadow: ${props => props.theme.shadow};
`;

export const TableHead = styled.th`
  padding: 15px;
  background-color: lightgray;
`;

export const TableData = styled.td`
  padding: 15px;
  border: ${props => props.theme.border};
`;
