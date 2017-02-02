import React, {Component, propTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = (props) => {
  return (
    <nav className="navbar navbar-inverse">
      <ul className="nav navbar-nav">

        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        <li><Link to="charts" activeClassName="active">Charts</Link></li>

      </ul>
    </nav>
  );
};

export default Header;
