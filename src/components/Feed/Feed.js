import React, { Component } from 'react';

import './Feed.css';

import Post from './Post/Post';
import Compose from './Compose/Compose';

export default class Feed extends Component {
  render() {
    return (
      <section className="Feed__parent">
        <Compose />
        <Post />
      </section>
    )
  }
}