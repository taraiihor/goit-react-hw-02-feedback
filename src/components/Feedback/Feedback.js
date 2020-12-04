import React from 'react';
import './Feedback.css';

class Feedback extends React.Component {
  render() {
    return (
      <div>
        <div>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">bad</button>
        </div>
        <h2>Statistics</h2>
        <span>Good:</span>
        <span>Neutral:</span>
        <span>Bad:</span>
      </div>
    );
  }
}
export default Feedback;
