import { Name, Status } from 'components/FriendListItem/FriendListItem.styled';
import { Container } from 'components/FriendListItem/FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Container>
      <Status $isonline={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Container>
  );
};
