import { Profile } from 'components/Profile/Profile';
import user from '../user.json';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <Profile className="profile" user={user} />
      <GlobalStyle />
    </>
  );
};
