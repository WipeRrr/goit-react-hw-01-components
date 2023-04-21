import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {{ title } && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {stats.map(stat => (
          <li key={stat.id} className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
            <span className={css.label}>{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stat: PropTypes.arrayOf({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}