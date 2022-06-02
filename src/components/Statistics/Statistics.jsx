import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import Notification from '../Notification/Notification';

function Statistics({ good, bad, neutral, total, positivePercentage }) {
  if (total() > 0) {
    return (
      <ul>
        <li>
          <p className={styles.feedbackOption}>
            Total: <span>{good}</span>{' '}
          </p>
        </li>
        <li>
          <p className={styles.feedbackOption}>
            Total: <span>{bad}</span>{' '}
          </p>
        </li>
        <li>
          <p className={styles.feedbackOption}>
            Total: <span>{neutral}</span>{' '}
          </p>
        </li>
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
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
};

export default Statistics;
