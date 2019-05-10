import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout headPageTitle="Home">
      <h1>HELLO!</h1>
      <h2>I'm Jorge Moreno. I'm fullstack developer</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
