import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import Notification from '../Notification/Notification';

function Statistics({ options, total, positivePercentage }) {
  if (total() > 0) {
    return (
      <ul>
        {Object.keys(options).map(key => (
          <li key={key}>
            <p className={styles.feedbackOption}>
              {key} : <span>{options[key]}</span>
            </p>
          </li>
        ))}
        <li>
          <p className={styles.feedbackOption}>
            Total: <span>{total()}</span>{' '}
          </p>
        </li>
        <li>
          <p className={styles.feedbackOption}>
            Positive feedback: {positivePercentage()}%
          </p>
        </li>
      </ul>
    );
  } else {
    return <Notification message="There is no feedback" />;
  }
}

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  positivePercentage: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
};

export default Statistics;
