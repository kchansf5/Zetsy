import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import ProductsContainer from './products/products_container';
import Banner from './banner/banner';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <Modal />
    <header>

      <Link to="/" className="header-logo">
        <div className="logo">Etsy</div>
      </Link>


      <search className="search">
        <input type="text" placeholder="Search for items or shops">
        </input>
      </search>
      <button className="search-button">
        Search
      </button>

      <GreetingContainer />


      <i class="fas fa-shopping-cart"></i>
      <cart className="cart-text">Cart</cart>

    </header>

    <Banner />
    <Switch>
      <Route exact path="/" component={ProductsContainer}/>
      <Redirect to="/"></Redirect>
    </Switch>

  </div>
);

export default App;
