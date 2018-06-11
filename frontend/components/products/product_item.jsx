import React from 'react';

class ProductItem extends React.Component {

  componentDidMount() {
    this.props.requestSingleProduct(this.props.match.params.productId);
  }

  render() {
    return (
      <div>
        Single Product Here Please
      </div>
    );
  }
}
export default ProductItem;
