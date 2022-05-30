import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={styles.btnList}>
      {' '}
      {Object.keys(options).map(key => (
        <li key={key} className={styles.btnElement}>
          <button
            type="button"
            data-value={key}
            className={styles.btn}
            onClick={onLeaveFeedback}
          >
            {key}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};

export default FeedbackOptions;
