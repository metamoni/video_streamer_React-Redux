import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
          <article 
            className="item"
            key={stream.id}>
            <i className="large middle aligned icon camera" />
            <h2 className="content">{stream.title}</h2>
            <p className="description">{stream.description}</p>
          </article>
        )
      });
  }

  render() {
    return(
      <main>
        <h1>Streams</h1>
        <section className="ui celled list">
          {this.renderList()}
        </section>
      </main>
    );
  }
};

const mapStateToProps = state => {
  // Object.values is a built-in js functions
  // takes an object as an argument
  // all the values are pulled out and inserted into an array 
  return { streams: Object.values(state.streams) }
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);