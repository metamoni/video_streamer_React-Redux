import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ title, content, actions, onClose }) => {
  return ReactDOM.createPortal(
    <main onClick={onClose} className="ui dimmer modals visible active">
      <section onClick={e => e.stopPropagation()} className="ui standard modal visible active">
        <h1 className="header">{title}</h1>
        <p className="content">{content}</p>
        <div className="actions">
          {actions}
        </div>
      </section>
    </main>, 
    document.querySelector('#modal')
  );
};

export default Modal;