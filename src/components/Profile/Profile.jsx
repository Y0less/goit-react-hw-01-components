import {
  ProfileWrap,
  ProfileImage,
  Description,
  UserName,
  StatsWrap,
  Stats,
} from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileWrap>
      <Description className="description">
        <ProfileImage src={avatar} alt="User avatar" />
        <UserName className="name">{username}</UserName>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>
      <StatsWrap class="stats">
        <Stats>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </Stats>
        <Stats>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </Stats>
        <Stats>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </Stats>
      </StatsWrap>
    </ProfileWrap>
  );
};
