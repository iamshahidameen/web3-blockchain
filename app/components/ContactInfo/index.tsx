import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './style.css';

interface ContactInfoProps {
  email: string;
  phone: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ email, phone }) => {
  return (
    <>
    <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Contact Information</h1>
        <div className="contact-info d-flex flex-sm-column flex-md-row align-items-sm-start align-items-center mt-2">
        <p className="contact-item d-flex align-items-center fs-4">
          <FontAwesomeIcon icon={faEnvelope}  />
          <a href="mailto:john.doe@example.com">{email}</a>
        </p>
        <p className="contact-item d-flex align-items-center fs-4">
          <FontAwesomeIcon icon={faPhone}  />
          <a href="tel:(123) 456-7890">{phone}</a>

        </p>
      </div>
        <button className="btn btn-primary btn-lg mt-4" type="button">Signup</button>
      </div>
     
    </>
  );
};

export default ContactInfo;
