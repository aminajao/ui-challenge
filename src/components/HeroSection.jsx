import React from 'react';
import users from '../assets/users.svg';
import agents from '../assets/agents.svg';
import pending from '../assets/pending.svg';
import requests from '../assets/approved.svg';
import green from '../assets/greenUp.svg';
import red from '../assets/redDown.svg';
import orange from '../assets/orangeUp.svg';
const data = [
  {
    value: '1478 286',
    icon: pending,
    status: 'Pending Requests',
    progress: green,
    timeline: 'Last month',
    color: '#4BDE97',
    rate: 4.07,
  },
  {
    value: '478 520',
    icon: requests,
    status: 'Approved Requests',
    progress: green,
    timeline: 'Last month',
    color: '#4BDE97',
    rate: 0.24,
  },
  {
    value: '154 872',
    icon: agents,
    status: 'Total Agents',
    progress: red,
    timeline: 'Last month',
    color: '#F26464',
    rate: 1.64,
  },
  {
    value: '167',
    icon: users,
    status: 'Total Users',
    progress: orange,
    timeline: 'Last month',
    color: '#FFB648',
    rate: '0.00',
  },
];
const HeroSection = () => {
  return (
    <div className="hero-container">
      {data.map((item) => (
        <div className="item" key={item.value}>
          <img src={item.icon} alt="" />
          <div className="second">
            <p className="value">{item.value}</p>
            <p className="status">{item.status}</p>
            <div className="last">
              <img src={item.progress} alt="" />{' '}
              <span className="index" style={{ color: item.color }}>
                {item.rate}
              </span>{' '}
              <span className="time">Last month</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
