import React from 'react';
import './style.scss';

const Form = (props) => {
  return (
    <form className="form" aria-label="Contact Form">
      <input
        tabIndex="0"
        type="text"
        placeholder="Name"
        className="form-input"
        aria-label="Name"
        required
      />
      <input
        tabIndex="0"
        type="email"
        placeholder="Email"
        className="form-input"
        aria-label="Email"
        required
      />
      <textarea
        tabIndex="0"
        placeholder="Message"
        className="form-textarea"
        aria-label="Message"
        required
      ></textarea>
      <button
        tabIndex="0"
        type="submit"
        className="form-button"
        aria-label="Send"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
