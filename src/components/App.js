import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = event => {
    const { value } = event.target.dataset;

    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };
  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0,
    );
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0,
    );
    const percentage = Math.floor((this.state['good'] / total) * 100);
    return percentage;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            options={this.state}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}

export { App };
