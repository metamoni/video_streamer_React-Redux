import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
  const actions = (
    <>
      <button className="ui button">Cancel</button>
      <button className="ui button primary">Delete</button>
    </>
  );

  const onClose = () => history.push('/');

  return (
    <>
      <Modal
        title="Delete stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onClose={onClose} />
    </>
  )
};

export default StreamDelete;