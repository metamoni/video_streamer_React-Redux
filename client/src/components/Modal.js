import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
  return ReactDOM.createPortal(
    <main onClick={() => history.push('/')} className="ui dimmer modals visible active">
      <section onClick={e => e.stopPropagation()} className="ui standard modal visible active">
        <h1 className="header">Delete stream</h1>
        <p className="content">Are you sure you want to delete this stream?</p>
        <div className="actions">
          <button className="ui button">Cancel</button>
          <button className="ui primary button">Delete</button>
        </div>
      </section>
    </main>, 
    document.querySelector('#modal')
  );
};

export default Modal;