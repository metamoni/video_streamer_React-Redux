import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return(
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      )
    };
  };

  renderList() {
    return this.props.streams.map(stream => {
      return (
          <article className="item" key={stream.id}>
            {this.renderAdmin(stream)}
            <i className="large middle aligned icon camera" />
            <h2 className="content">{stream.title}</h2>
            <p className="description">{stream.description}</p>
          </article>
        )
      });
  };

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link
            to="/streams/new"
            className="ui button primary">Create stream</Link>
        </div>
      )
    }
  };

  render() {
    return(
      <main>
        <h1>Streams</h1>
        <section className="ui celled list">
          {this.renderList()}
        </section>
        {this.renderCreate()}
      </main>
    );
  }
};

const mapStateToProps = state => {
  // Object.values is a built-in js functions
  // takes an object as an argument
  // all the values are pulled out and inserted into an array 
  return { 
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);