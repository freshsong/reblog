import React from 'react'
import { FaGoogle, FaInstagram, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
      <div id="contact" className="contact-container">
        <h2>연락하기</h2>
        <div className="contact-box">
          <div className="contact-item">
            <FaGoogle className="contact-icon" />
            <span>racimo.715@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaInstagram className="contact-icon" />
            <span>@dev.bella</span>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+82-10-4888-0715</span>
          </div>
        </div>
      </div>
    );
  }

export default Contact
