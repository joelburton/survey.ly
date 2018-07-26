import React from 'react';
import RespondentInfo from './RepondentInfo';
import Question from './Question';
import './Survey.css';

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getEmptyResponse();
  }

  /** getEmptyResponse: used for initial state & to reset after submission */

  getEmptyResponse() {
    return {
      respondentInfo: {
        name: "",
        email: "",
      },
      response: {},
      errors: {}
    }
  }

  /** changeRepondentInfo: change a field in respondent info */

  changeRespondentInfo = (field, val) => {
    this.setState(st => ({
      respondentInfo: { ...st.respondentInfo, [field]: val }
    }));
  }

  /** answerQuestion: update response for a question; also clears error for that field */

  answerQuestion = (qid, answer) => {
    this.setState(st => ({
      response: { ...st.response, [qid]: answer },
      errors: { ...st.errors, [qid]: null }
    }))
  }

  /** submit form: validates & sets errors for empty responses; if error-free, submit & reset */

  submit(evt) {
    evt.preventDefault();

    // set errors for every empty field

    const errors = {}
    for (let q of this.props.questions) {
      if (!this.state.response[q.id])
        errors[q.id] = "Cannot leave blank";
    }

    this.setState(st => ({
      errors
    }))

    if (Object.keys(errors).length === 0) {
      // AJAX call here!
      alert("Response sent to server!");
      this.setState(this.getEmptyResponse());
    }
  }

  render() {
    return (
      <form className="Survey" onSubmit={evt => this.submit(evt)}>

        <pre>state = {JSON.stringify(this.state, null, 2)}</pre>

        <h2>{this.props.title}</h2>

        <RespondentInfo
          respondentInfo={this.state.respondentInfo}
          handleChange={this.changeRespondentInfo} />

        {this.props.questions.map(
          q => <Question
            key={q.id}
            question={q}
            response={this.state.response[q.id]}
            error={this.state.errors[q.id]}
            handleChange={this.answerQuestion} />
        )}

        <p><button>Submit</button></p>
      </form>
    )
  }
}

export default Survey;