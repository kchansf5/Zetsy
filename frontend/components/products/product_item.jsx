import React from 'react';

class ProductItem extends React.Component {

  componentDidMount() {
    this.props.requestSingleProduct(this.props.match.params.productId);
  }

  render() {
    if (this.props.singleProduct) {
      return (
        <div className="single-product-listing">
          {this.props.singleProduct.product_name}
          <img src={this.props.singleProduct.image_url} />
          {this.props.singleProduct.price}
          {this.props.singleProduct.description}

        </div>
      );
    } else {
      return (
        null
      );
    }
  }
}
export default ProductItem;
