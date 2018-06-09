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
      <div>
        {this.props.products.map(product => {
          return(
            <div>
              {product.product_name}
              <img src={product.image_url}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Products;
