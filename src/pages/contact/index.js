import React from 'react';

import Form from '../../components/form';

import './style.scss';

const Contact = () => {
  return (
    <main className="contact-wrapper">
      <h1 tabIndex="0" className="contact__title">
        Contact
      </h1>
      <section>
        <h3 tabIndex="0">Mobile phone: 1234 567 890</h3>
      </section>
      <section tabIndex="0">
        <h3>
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/">https://www.linkedin.com/</a>
        </h3>
      </section>
      <section>
        <Form />
      </section>
    </main>
  );
};

export default Contact;
