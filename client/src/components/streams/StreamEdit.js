import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    const streamId = this.props.match.params.id;
    this.props.fetchStream(streamId);
  }

  render() {
    if (!this.props.stream) {
      return <p>Loading...</p>
    }

    return(
      <div>
        <h1>{this.props.stream.title}</h1>
        <p>{this.props.stream.description}</p>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id

  return {
    stream: state.streams[id]
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);