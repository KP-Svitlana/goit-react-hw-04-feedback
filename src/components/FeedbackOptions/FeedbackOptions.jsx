import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((el, index) => {
        return (
          <button
            key={el[index]}
            className={css.btn}
            onClick={() => {
              onLeaveFeedback(el);
            }}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
