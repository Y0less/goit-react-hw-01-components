import styled from 'styled-components';

export const Section = styled.section`
  display: block;
  margin-right: auto;
  margin-top: 50px;
  margin-left: auto;
  text-align: center;
  width: 400px;
  border: ${props => props.theme.border};
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.cardColor};
  box-shadow: ${props => props.theme.shadow};
`;

export const List = styled.ul`
  display: flex;
  text-transform: none;
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

export const Percentage = styled.span`
  margin: 5px;
  font-weight: bold;
`;
