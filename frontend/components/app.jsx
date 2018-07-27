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
import ProductItemContainer from './products/product_item_container';
import CategoryContainer from './category/category_container';
import CartItemsContainer from './cart/cart_items_container';
import Banner from './banner/banner';
import CategoryNav from './category_nav/category_nav';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div className="entire-app">
    <div>
      <Modal />

      <header>
        <Link to="/" className="header-logo">
          <div className="logo">Zetsy</div>
        </Link>

        <div className="search">
          <input type="text" placeholder="Search for items throughout Hyrule">
          </input>
        </div>
        <button className="search-button">
          Search
        </button>

        <GreetingContainer />




      </header>

      <CategoryNav />

      <Switch>
        <ProtectedRoute path="/cart" component={CartItemsContainer}/>
        <Route path="/products/categories/:category" component={CategoryContainer}/>
        <Route path="/products/:productId" component={ProductItemContainer}/>
        <Route path="/products" component={ProductsContainer}/>
        <Route exact path="/" component={Banner}/>
        <Redirect to="/"></Redirect>
      </Switch>

    </div>

    <footer>
      <div className="footer-logo">Zetsy</div>
      <ul className="footer-items">
        <li className="slogan">We make it easy to defeat the Calamity.</li>
        <div className="footer-right">
          <li>© 2018 Zetsy, Inc.</li>
          <li className="github"><a href="https://github.com/kchansf5">GitHub</a></li>
          <li className="linkedin"><a href="https://www.linkedin.com/in/kchansf5/">LinkedIn</a></li>
        </div>
      </ul>
    </footer>

  </div>
);

export default App;
