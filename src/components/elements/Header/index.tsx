import React from 'react';
import HeaderTemplate from './template';

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: 'Contact Me',
    path: '#contact',
  },
];

const Header: React.FC = () => {
  return <HeaderTemplate data={navLinks} />;
};

export default Header;
