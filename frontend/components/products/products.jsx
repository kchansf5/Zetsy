import React from 'react';

class Products extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestProducts();
  }

  render() {
    console.log(this.props.products);
    return (
      <div className="product-listings">
        {this.props.products.map(product => {
          return(

            <a href={`/#/products/${product.id}`}>
              <div className="product">
                <img src={product.image_url}/>
                <div className="product-name">
                  {product.product_name}
                </div>
                <div className="product-price">

                  ${product.price}.00
                </div>
              </div>
            </a>

          );
        })}
      </div>
    );
  }
}

export default Products;
