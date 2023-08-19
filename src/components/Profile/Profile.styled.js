import styled from 'styled-components';

export const ProfileWrap = styled.div`
  display: block;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  border: 1px solid gray;
  border-radius: ${props => props.theme.radius.borderRadius};
  background-color: ${props => props.theme.colors.cardColor};
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.hoverColor};
  }
`;

export const ProfileImage = styled.img`
  width: 50%;
  height: 50%;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.whiteColor};
`;

export const Description = styled.div`
  text-align: center;
`;

export const UserName = styled.p`
  font-weight: bold;
`;

export const StatsWrap = styled.ul`
  display: flex;
  text-align: center;
  background-color: ${props => props.theme.colors.whiteColor};
`;

export const Stats = styled.li`
  flex-basis: calc((100%) / 3);
  padding: 14px;
  border: 1px solid gray;

  display: flex;
  flex-direction: column;
`;
