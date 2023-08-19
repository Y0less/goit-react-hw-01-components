export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {/* <h2 className="title">{title}</h2> */}
      {title && <h2 className="title">{title}</h2>}
      {stats.map(({ id, label, percentage }) => {
        return (
          <ul key={id} className="stat-list">
            <li className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </li>
          </ul>
        );
      })}
    </section>
  );
};
