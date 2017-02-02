/* eslint-disable no-console */

import React, {Component, propTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';



class Layout extends Component {

  render () {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>

    );
  }
};


export default Layout;
