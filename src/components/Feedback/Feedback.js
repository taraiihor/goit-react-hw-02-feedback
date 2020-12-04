import React from 'react';
import './Feedback.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    console.log(event.type);
  };
  render() {
    return (
      <div>
        <div>
          <button
            type="button"
            onClick={() => {
              console.log('збільшити Good');
            }}
          >
            Good
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('збільшити Neutral');
            }}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('збільшити Bad');
            }}
          >
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <ul>
          <li>
            Good: <span>0</span>
          </li>
          <li>
            Neutral: <span>0</span>
          </li>
          <li>
            Bad: <span>0</span>
          </li>
        </ul>
      </div>
    );
  }
}
export default Feedback;
