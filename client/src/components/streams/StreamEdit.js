import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    const streamId = this.props.match.params.id;
    this.props.fetchStream(streamId);
  }

  onSubmit = formValues => {
    console.log(formValues)
  };

  render() {
    if (!this.props.stream) {
      return <p>Loading...</p>
    }
    const formValues = _.pick(this.props.stream, 'title', 'description')

    return(
      <article>
        <h2>Edit stream</h2>
        <StreamForm 
          initialValues={formValues} 
          onSubmit={this.onSubmit} />
      </article>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id

  return {
    stream: state.streams[id]
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);