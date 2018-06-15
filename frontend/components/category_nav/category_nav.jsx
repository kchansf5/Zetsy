import React from 'react';
import { Link } from 'react-router-dom';

class CategoryNav extends React.Component {

  render() {
    return (
      <div className="category_nav">
        <ul className="categories">
          <Link to="/products"><li>Food</li></Link>
          <Link to="/products"><li>Weapons</li></Link>
          <Link to="/products"><li>Shields</li></Link>
          <Link to="/products"><li>Armor</li></Link>
          <Link to="/products"><li>Accessories</li></Link>
          <Link to="/products"><li>Ancient Items</li></Link>
          <Link to="/products"><li>Key Items</li></Link>
        </ul>
      </div>
    );
  }

}

export default CategoryNav;
