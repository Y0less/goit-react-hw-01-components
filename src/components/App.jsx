import { Profile } from 'components/Profile/Profile';
import user from '../user.json';

export const App = () => {
  return (
    <>
      <Profile className="profile" user={user} />
    </>
  );
};
