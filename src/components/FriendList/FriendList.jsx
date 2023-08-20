import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendList } from './FriendList.styled';

export const FriendsList = props => {
  return (
    <FriendList>
      {props.friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendList>
  );
};
