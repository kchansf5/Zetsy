import React from 'react';

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestProducts();
  }

  render() {
    return (
      <div>
        {this.props.products}
      </div>
    );
  }
}

export default Products;
