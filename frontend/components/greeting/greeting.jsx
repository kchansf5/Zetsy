import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal, demoLogin }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <button class="top-register-button" onClick={() => openModal('signup')}>Register</button>
      &nbsp; &nbsp;

      <button onClick={() => demoLogin()}>Demo</button>

      <button onClick={() => openModal('login')}>Sign in</button>
      &nbsp; &nbsp;


    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h3 className="welcome-user">Welcome, {currentUser.username}!</h3>
      <Link to="/">
        <button className="logout" onClick={logout}>Log Out</button>
      </Link>
    </hgroup>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
};

export default Greeting;
