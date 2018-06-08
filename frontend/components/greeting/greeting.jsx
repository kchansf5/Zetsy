import React from 'react';

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
      <button className="logout" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
};

export default Greeting;
