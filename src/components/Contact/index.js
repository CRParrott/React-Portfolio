import React from 'react';

function Contact() {
  return (
    <div id="contact-me" className="Contact">
      <h1>Contact Page</h1>
      <ul>
        <li>
          <a
            className="Github"
            href="https://github.com/CRParrott"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
          className="Email"
          href="cparrott5700@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          >
          Email
          </a>
        </li>
        <li>
          <a
          className="Linkedin"
          href="linkedin.com/in/charles-parrott-75811b140"
          target="_blank"
          rel="noopener noreferrer"
          >
          Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;