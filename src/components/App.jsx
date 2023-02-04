import { Component } from 'react';

const buttons = ['Good', 'Neutral', 'Bad'];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = ev => {
    let feedback = ev.target.value;

    switch (feedback) {
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
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;

    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;

    let percentage = Math.round((good * 100) / total);
    console.log(percentage);
    return Number.isNaN(percentage) ? 0 : percentage;
  }

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          {buttons.map((el, index) => {
            return (
              <button key={el[index]} value={el} onClick={this.onLeaveFeedback}>
                {el}
              </button>
            );
          })}
        </div>
        <h2>Statistic</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p>
      </div>
    );
  }
}
