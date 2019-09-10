import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <nav className="ui secondary pointing menu">
      <Link to="/" className="left menu item">Streamer</Link>
      <div className="right menu item">
        <Link to="/" className="linked-menu-item item">All Streams</Link>
        <GoogleAuth />
      </div>
    </nav>
  )
};

export default Header;