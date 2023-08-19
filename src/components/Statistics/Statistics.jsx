import { List, ListItem, Section, StatItem } from './Statistics.styled';
import { getRandomHexColor } from 'Utils/randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <List className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <ListItem key={id} className="item" color={getRandomHexColor()}>
              <StatItem className="label">{label}</StatItem>
              <StatItem className="percentage">{percentage}%</StatItem>
            </ListItem>
          );
        })}
      </List>
    </Section>
  );
};
