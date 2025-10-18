import React from "react";

const ContactForm = () => {
  return (
    <div>
      <h2>Contact Form</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
