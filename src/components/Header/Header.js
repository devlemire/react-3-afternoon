import React, { Component } from 'react';

import './Header.css';

import CompanyIcon from 'react-icons/lib/md/filter-hdr';

import Search from './Search/Search';

export default class Header extends Component {
  render() {
    return (
      <section className="Header__parent">
        <section className="Header__content">

          <div className="Header__company-info">
            <CompanyIcon id="Header__company-icon" />
            <span>Social Mountain</span>
          </div>

          <Search />

        </section>
      </section>
    )
  }
}