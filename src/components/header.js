import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <div>
      <h1>Mi personal Blog Post</h1>
      <Link to="/">Home</Link> | <Link to="/blog">Blog</Link> |{' '}
      <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Header;
