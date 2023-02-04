import { Component } from 'react';
import { Statistic } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const buttons = ['Good', 'Neutral', 'Bad'];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick(value) {
    switch (value) {
      case 'Good':
        this.setState(prevState => {
          return { good: prevState.good + 1 };
        });
        break;
      case 'Neutral':
        this.setState(prevState => {
          return { neutral: prevState.neutral + 1 };
        });
        break;
      case 'Bad':
        this.setState(prevState => {
          return { bad: prevState.bad + 1 };
        });
        break;
      default:
        console.log('Sorry, something going wrong');
    }
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;

    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;

    let total = good + neutral + bad;
    let percentage = Math.round((good * 100) / total);

    return Number.isNaN(percentage) ? 0 : percentage;
  }

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttons}
            onLeaveFeedback={ev => this.onBtnClick(ev)}
          />
        </Section>
        {this.state.good === 0 &&
        this.state.neutral === 0 &&
        this.state.bad === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}
