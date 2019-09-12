import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    // return <input {...formProps.input} />
    return (
      <div className="field">
        <label htmlFor={input.name}>{label}</label>
        <input id={input.name} {...input} />
      </div>
    )
  }

  onSubmit(formValues) {
    console.log(formValues)
  }

  render() {
    return(
      <form 
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form">
        <Field 
          label="Enter Title"
          name="title"
          component={this.renderInput} />
        <Field 
          label="Enter Description"
          name="description"
          component={this.renderInput} />
          <button className="ui button primary">Submit</button>
      </form>
    )
  }
};

export default reduxForm({ 
  form: 'streamCreate'
 })(StreamCreate);