import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin: 10px;
  border: ${props => props.theme.border};
  background-color: ${props => props.theme.colors.cardColor};
  box-shadow: ${props => props.theme.shadow};
`;

export const Status = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${props => (props.$isonline ? 'green' : 'red')};
`;

export const Name = styled.p`
  font-weight: bold;
`;
