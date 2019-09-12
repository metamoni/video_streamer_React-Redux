import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <h2 className="header">{error}</h2>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // return <input {...formProps.input} />
    return (
      <div className="field">
        <label htmlFor={input.name}>{label}</label>
        <input id={input.name} autoComplete="off" {...input} />
        <div>{this.renderError(meta)}</div>
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
        className="ui error form">
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

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({ 
  form: 'streamCreate',
  validate
 })(StreamCreate);