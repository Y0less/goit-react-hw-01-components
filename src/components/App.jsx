import { Profile } from 'components/Profile/Profile';
import user from '../user.json';
import { GlobalStyle } from './GlobalStyle';
import PropTypes from 'prop-types';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <GlobalStyle />
    </>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
