import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout headPageTitle="About">
      <h1>About Me</h1>
      <p>I currently working on MIES</p>
      <p>
        <Link to="/contact">Want to work with me? Reach out!</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
