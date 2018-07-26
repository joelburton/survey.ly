import React from 'react';
import './RespondentInfo.css';

// (this could have been written as a functional stateless component, too)

class RespondentInfo extends React.Component {
  render() {
    const { name, email } = this.props.respondentInfo;

    return (
      <fieldset className="RespondentInfo">
        <label>Optional Personal Info</label>

        <div className="RespondentInfo-question">
          <label htmlFor="ri-name">Name</label>
          <input id="ri-name"
            value={name}
            onChange={evt => this.props.handleChange('name', evt.target.value)} />
        </div>

        <div className="RespondentInfo-question">
          <label htmlFor="ri-email">Email</label>
          <input id="ri-email"
            value={email}
            onChange={evt => this.props.handleChange('email', evt.target.value)} />
        </div>

      </fieldset>
    )
  }
}

export default RespondentInfo;