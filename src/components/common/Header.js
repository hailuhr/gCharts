import React, {Component, propTypes} from 'react';


const Header = (props) => {
  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Viz</li>
      </ul>
    </nav>
  );
};

export default Header;
