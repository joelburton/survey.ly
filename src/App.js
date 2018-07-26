import React, { Component } from 'react';
import Survey from './Survey';
import './App.css';

const SAMPLE_SURVEY = {
  id: 42,
  title: "Survey Title",
  questions: [
    {
      id: 1,
      title: "Question One",
      type: "likert"
    },
    {
      id: 2,
      title: "Question Two",
      type: "multiChoice",
      choices: [
        {
          id: 1,
          text: "Ice cream"
        },
        {
          id: 2,
          text: "Tacos"
        },
      ]
    }
  ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Survey.ly</h1>
        <Survey
          id={SAMPLE_SURVEY.id}
          title={SAMPLE_SURVEY.title}
          questions={SAMPLE_SURVEY.questions}
        />
        <hr />
        <p>Copyright by Survey.ly</p>
      </div>
    );
  }
}

export default App;
