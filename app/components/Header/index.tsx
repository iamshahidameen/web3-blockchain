import React from 'react';
import './style.css';

interface HeaderProps {
  userName: string;
  profilePicture: string;
}

const Header: React.FC<HeaderProps> = ({ userName, profilePicture }) => {
  return (
    <header className="pb-3 mb-4 border-bottom header__wrapper">
      <div className="profile__wrapper">
        <div className="profile__wrapper--image">
        <img
        src={profilePicture}
        alt={`${userName}'s profile`}
        className="profile-picture rounded-circle"
      />
        </div>
        <div className="profile__wrapper--name">
          <h1 className="ms-3 fw-bold">{userName}</h1>
      </div>
      </div>
      
    </header>
  );
};

export default Header;
