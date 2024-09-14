import React from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
