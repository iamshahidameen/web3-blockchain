import React from 'react';
import './style.css';

interface HeaderProps {
  userName: string;
  profilePicture: string;
}

const Header: React.FC<HeaderProps> = ({ userName, profilePicture }) => {
  return (
    <header className="d-flex align-items-center pb-3 mb-4 border-bottom">
      <img
        src={profilePicture}
        alt={`${userName}'s profile`}
        className="profile-picture rounded-circle"
      />
      <h1 className="ms-3 fw-bold">{userName}</h1>
    </header>
  );
};

export default Header;
