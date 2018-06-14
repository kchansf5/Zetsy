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

          <div className="logged-out-cart" onClick={() => openModal('login')}>
            <i class="fas fa-shopping-cart"></i>
            <cart className="cart-text">Cart</cart>
          </div>

      </nav>


  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h3 className="welcome-user">Welcome, {currentUser.username}!</h3>
      <Link to="/">
        <button className="logout" onClick={logout}>Log Out</button>
      </Link>

      <Link to="/cart">
        <div className="cart" >
          <i class="fas fa-shopping-cart"></i>
          <cart className="cart-text">Cart</cart>
        </div>
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
