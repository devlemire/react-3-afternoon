import React, { Component } from 'react';

import './Header.css';

import CompanyIcon from 'react-icons/lib/md/filter-hdr';
import ProfileIcon from 'react-icons/lib/md/person-outline';

import Search from './Search/Search';
import Compose from './Compose/Compose';

export default class Header extends Component {
  render() {
    return (
      <section className="Header__parent">
        <section className="Header__content">

          <div className="Header__company-info">
            <CompanyIcon id="Header__company-icon" />
            <span>Social Mountain</span>
          </div>


          <div className="Header__right">
            <Search />

            <div className="Header__profile">
              <ProfileIcon />
            </div>

            <Compose />
          </div>

        </section>
      </section>
    )
  }
}