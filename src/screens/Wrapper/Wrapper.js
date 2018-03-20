// @flow

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './Wrapper.css';

export default class Wrapper extends Component {
  render() {
    return (
      <BrowserRouter history={this.browserhistory}>
        <div className="wrapper">
          <header className="wrapper__header">
            <div className="header__logo">
              <div className="logo__text">LOGO</div>
              <div className="logo__line"></div>
            </div>
          </header>
          <div className="wrapper__children">
            {this.props.children}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}