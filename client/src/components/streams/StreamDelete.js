import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    fetchStream(this.props.match.params.id)
  };

  renderActions() {
    return (
      <>
        <button className="ui button">Cancel</button>
        <button className="ui button primary">Delete</button>
      </>
    )
  };

  renderTitle() {
    if (!this.props.stream) {
      return "Delete stream?"
    }

    return `Delete ${this.props.stream.title}`
  }

  onClose = () => history.push('/');

  render () {
    return (
      <>
        <Modal
          title={this.renderTitle()}
          content="Are you sure you want to delete this stream?"
          actions={this.renderActions()}
          onClose={this.onClose} />
      </>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;

  return {
    stream: state.streams[id]
  }
};

export default connect(mapStateToProps, { fetchStream })(StreamDelete);