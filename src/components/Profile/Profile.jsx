import {
  ProfileWrap,
  ProfileImage,
  Description,
  UserName,
  StatsWrap,
  Stats,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrap>
      <Description>
        <ProfileImage src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>
      <StatsWrap>
        <Stats>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </Stats>
        <Stats>
          <span>Views</span>
          <span>{stats.views}</span>
        </Stats>
        <Stats>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </Stats>
      </StatsWrap>
    </ProfileWrap>
  );
};
