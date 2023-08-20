import {
  List,
  ListItem,
  Section,
  StatItem,
  Percentage,
} from './Statistics.styled';
import { getRandomHexColor } from 'Utils/randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <h2>{title}</h2>}
      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ListItem key={id} color={getRandomHexColor()}>
              <StatItem>{label}</StatItem>
              <Percentage>{percentage}%</Percentage>
            </ListItem>
          );
        })}
      </List>
    </Section>
  );
};
