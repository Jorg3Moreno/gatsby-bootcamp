import React from 'react';

import Layout from '../components/layout';

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        Twitter:{' '}
        <a
          href="https://twitter.com/Jorg3Moreno"
          rel="noreferrer noopener"
          target="_blank"
        >
          @Jorg3Moreno
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;
