import React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';

const ContactPage = () => {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};

export default ContactPage;
