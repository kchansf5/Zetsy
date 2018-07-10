import React from 'react';
import { NavLink } from 'react-router-dom';
import NumberFormat from 'react-number-format';

class Category extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestProducts();
  }

  render() {
    return (
      <div className="category-products">
        <div className="back-to-products"><NavLink to="/products">Back to all products</NavLink></div>
        <div className="product-listings">
          {this.props.products.filter(product => product.category === this.props.category).map(product => {
            return(
              <NavLink key={product.id} to={`/products/${product.id}`}>
                <div className="product">
                  <img src={product.image_url}/>
                  <div className="product-name">
                    {product.product_name}
                  </div>
                  <div className="product-price">
                    <NumberFormat value={product.price + '.00'}
                      displayType={'text'} thousandSeparator={true} prefix={'$'}/>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>

      </div>
    );
  }
}

export default Category;
