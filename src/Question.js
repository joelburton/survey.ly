import React from 'react';
import './Question.css';
import MultiChoiceQuestion from './MultiChoiceQuestion';
import LikertQuestion from './LikertQuestion';

// could also be a stateless functional component

class Question extends React.Component {
  render() {
    const { title, type, id, choices } = this.props.question;

    return (
      <div className="Question">
        <h3>{title}</h3>

        {this.props.error ? <p className="error">{this.props.error}</p> : null}

        {type === "likert"
          ? <LikertQuestion id={id} response={this.props.response} handleChange={this.props.handleChange} />
          : <MultiChoiceQuestion id={id} response={this.props.response} choices={choices} handleChange={this.props.handleChange} />}

      </div>
    )
  }
}

export default Question;