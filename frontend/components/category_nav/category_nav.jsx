import React from 'react';
import { Link } from 'react-router-dom';

class CategoryNav extends React.Component {

  render() {
    return (
      <div className="category_nav">
        <ul className="categories">
          <Link to="/products/categories/food"><li>Food</li></Link>
          <Link to="/products/categories/weapons"><li>Weapons</li></Link>
          <Link to="/products/categories/shields"><li>Shields</li></Link>
          <Link to="/products/categories/armor"><li>Armor</li></Link>
          <Link to="/products/categories/accessories"><li>Accessories</li></Link>
          <Link to="/products/categories/ancient items"><li>Ancient Items</li></Link>
          <Link to="/products/categories/key items"><li>Key Items</li></Link>
        </ul>
      </div>
    );
  }

}

export default CategoryNav;
