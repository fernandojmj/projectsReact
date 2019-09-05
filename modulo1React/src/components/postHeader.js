import React, { Component, Fragment } from 'react';

import style from '../style.scss';

export default class PostHeader extends Component {
  render() {
    return (
      <Fragment>
        <div className="header-Post">
          <img className="circle-image" src={this.props.avatar} alt="" />
          <p>{this.props.name}</p>
        </div>
      </Fragment>
    );
  }
}
