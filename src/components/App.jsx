import { useState } from 'react';
import { Statistic } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const buttons = ['good', 'neutral', 'bad'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onBtnClick(value) {
    switch (value) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log('Soory, something going wrong');
    }
  }

  function countTotalFeedback() {
    let total = good + neutral + bad;

    return total;
  }

  function countPositiveFeedbackPercentage() {
    let total = countTotalFeedback();
    let percentage = Math.round((good * 100) / total);

    return Number.isNaN(percentage) ? 0 : percentage;
  }

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={buttons} onLeaveFeedback={onBtnClick} />
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
};
