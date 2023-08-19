import styled from 'styled-components';

export const Section = styled.section`
  display: block;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  width: 400px;
  border: 1px solid gray;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100%) / 4);
  border: 1px solid gray;
  padding: 10px;
  background-color: ${props => props.color};
`;

export const StatItem = styled.span`
  margin: 5px;
`;
