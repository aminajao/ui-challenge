import React from 'react';
import { FaAngleDown, FaBars, FaSearch } from 'react-icons/fa';
import '../styles/header.css';
import first from '../assets/Group 7.svg';
import second from '../assets/Group 6.svg';
const Header = ({ handleToggleSidebar }) => {
  return (
    <div className="header-container">
      <div className="mobile-heading">
        <p className="title">Dashboard</p>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars fontSize={20} />
        </div>
      </div>
      <p className="title">Dashboard</p>
      <div className="other-items">
        <div className="input">
          <FaSearch className="search-icon" />

          <input type="search" name="" id="" placeholder="Enter keywords..." />
        </div>
        <p className="en">
          {' '}
          EN <FaAngleDown className="icon" />
        </p>
        <img src={first} alt="" />
        <img src={second} alt="" />
        <div className="img"></div>
      </div>
    </div>
  );
};

export default Header;
