import React from 'react';
import './MultiChoiceQuestion.css';

// could also be a stateless functional component

class MultiChoiceQuestion extends React.Component {
  render() {
    return (
      <div className="MultiChoiceQuestion">
        {this.props.choices.map(c => (
          <div key={c.id}>
            <input type="radio"
              name="q-{c.id}"
              onChange={evt => this.props.handleChange(this.props.id, c.id)}
              checked={this.props.response === c.id}
            />
            {c.text}
          </div>
        ))}
      </div>
    )
  }
}

export default MultiChoiceQuestion;