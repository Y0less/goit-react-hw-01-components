import { Status } from 'components/FriendListItem/FriendListItem.styled'
import {Container} from 'components/FriendListItem/FriendListItem.styled'
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Container className="item">
      <Status $isonline={isOnline} className="status"></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Container>
  );
};
