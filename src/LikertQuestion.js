import React from 'react';
import './LikertQuestion.css';

// could also be a stateless functional component

class LikertQuestion extends React.Component {
  render() {
    const handleChange = this.props.handleChange;

    // instead of hard-coding 7 values here, this could be done in a loop
    return (
      <div className="LikertQuestion">
        No
        {Array.from({ length: 7 }).map((_, idx) =>
          <input
            key={idx}
            type="radio"
            name="q-{q.id}"
            checked={this.props.response === idx}
            onChange={evt => handleChange(this.props.id, idx)}
          />
        )}
        Yes
      </div>
    )
  }
}

export default LikertQuestion;