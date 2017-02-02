import React, {Component, propTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = (props) => {
  return (
    <nav className="navbar">
      <ul>

        <p><IndexLink to="/" activeClassName="active">Home</IndexLink></p>
        <p><Link to="charts" activeClassName="active">Charts</Link></p>

      </ul>
    </nav>
  );
};

export default Header;
