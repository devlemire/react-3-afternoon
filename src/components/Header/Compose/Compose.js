import React, { Component } from 'react';

import './Compose.css';

import ComposeIcon from 'react-icons/lib/md/control-point';

export default class Compose extends Component {
  render() {
    return (
      <section className="Compose__parent">

        <div className="Compose__content">
          <button><ComposeIcon id="Compose__icon" />Compose</button>
        </div>

      </section>
    )
  }
}