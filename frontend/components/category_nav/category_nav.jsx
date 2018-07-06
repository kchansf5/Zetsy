import React from 'react';
import { NavLink } from 'react-router-dom';

class CategoryNav extends React.Component {

  render() {
    return (
      <div className="category_nav">
        <ul className="categories">
          <NavLink to="/products/categories/food"><li>Food</li></NavLink>
          <NavLink to="/products/categories/weapons"><li>Weapons</li></NavLink>
          <NavLink to="/products/categories/shields"><li>Shields</li></NavLink>
          <NavLink to="/products/categories/armor"><li>Armor</li></NavLink>
          <NavLink to="/products/categories/accessories"><li>Accessories</li></NavLink>
          <NavLink to="/products/categories/ancient items"><li>Ancient Items</li></NavLink>
          <NavLink to="/products/categories/key items"><li>Key Items</li></NavLink>
        </ul>
      </div>
    );
  }

}

export default CategoryNav;
