import React from 'react';

class ProductItem extends React.Component {

  componentDidMount() {
    this.props.requestSingleProduct(this.props.match.params.productId);
  }

  // need function to handle clicking the 'Add to Cart' button
  //clicking should take the user to the cart show page and create a new cart item (with product_id, user_id, and quantity)
  

  //need way to link quantity field with shopping cart item quantity props

  render() {
    if (this.props.singleProduct) {
      return (
        <div className="single-product-listing">

          <div className="product-image">
            <img src={this.props.singleProduct.image_url} />
            <div className="description">
              <div className="des-text" Description>
                Description
              </div>
              {this.props.singleProduct.description}
            </div>
          </div>

          <div className="product-text">
            <div className="name">
              {this.props.singleProduct.product_name}
            </div>

            <div className="price">
              ${this.props.singleProduct.price}.00
            </div>

            <div className="quantity">
              <div className="text">
                Quantity
              </div>

              <button className="num-quantity">
                1 <i class="arrow down"></i>
              </button>

              <button className="add">
                Add to cart
              </button>

              <div className="menu">

              </div>
            </div>
          </div>

        </div>
      );
    } else {
      return (
        <div>waiting for product</div>
      );
    }
  }
}
export default ProductItem;
