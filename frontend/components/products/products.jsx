import React from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

class Products extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestProducts();
  }

  render() {
    return (
      <div className="product-listings">
        {this.props.products.map(product => {
          return(

            <Link key={product.id} to={`/products/${product.id}`}>
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
            </Link>

          );
        })}
      </div>
    );
  }
}

export default Products;
