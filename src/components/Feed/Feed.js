import React, { Component } from 'react';

import './Feed.css';

import Post from './Post/Post';

export default class Feed extends Component {
  render() {
    return (
      <section className="Feed__parent">
        <Post />
      </section>
    )
  }
}