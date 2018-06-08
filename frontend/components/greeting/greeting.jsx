import React from 'react';

const Greeting = ({ currentUser, logout, openModal, demoLogin }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <button class="top-register-button" onClick={() => openModal('signup')}>Register</button>
      &nbsp; &nbsp;

      <button onClick={() => openModal('login')}>Sign in</button>
      &nbsp; &nbsp;

      <button onClick={() => demoLogin()}>Demo</button>
      <i class="fas fa-shopping-cart"></i>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <button className="header-button" onClick={logout}>Log Out</button>
      <i class="fas fa-shopping-cart"></i>
    </hgroup>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
};

export default Greeting;
