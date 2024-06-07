import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './ContactInfo.css';

interface ContactInfoProps {
  email: string;
  phone: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ email, phone }) => {
  return (
    <div className="contact-info d-flex flex-column flex-md-row align-items-center">
      <div className="contact-item d-flex align-items-center mb-2 mb-md-0 me-md-3">
        <FontAwesomeIcon icon={faEnvelope} className="me-2" />
        <span>{email}</span>
      </div>
      <div className="contact-item d-flex align-items-center">
        <FontAwesomeIcon icon={faPhone} className="me-2" />
        <span>{phone}</span>
      </div>
    </div>
  );
};

export default ContactInfo;
