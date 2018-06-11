import React from 'react';

class CategoryNav extends React.Component {

  render() {
    return (
      <div className="category_nav">
        <ul className="categories">
          <li>Food</li>
          <li>Weapons</li>
          <li>Shields</li>
          <li>Armor</li>
          <li>Accessories</li>
          <li>Ancient Items</li>
          <li>Key Items</li>
        </ul>
      </div>
    );
  }

}

export default CategoryNav;
