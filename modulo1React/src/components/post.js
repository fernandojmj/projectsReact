import React, { Component, Fragment } from 'react';
import PostHeader from './postHeader';

import style from '../style.scss';

export default class Post extends Component {
  render() {
    return (
      <Fragment>
        <div className="box">
          <PostHeader avatar={this.props.data.avatar} name={this.props.data.name} />
          <div className="post">
            <p className="body">{this.props.data.body}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}
