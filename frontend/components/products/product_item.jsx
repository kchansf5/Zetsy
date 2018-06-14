import React from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends React.Component {

  constructor(props){

    super(props);
    // debugger;
    this.state = {};
    this.state.quantity = 1;
    this.state.product_id = this.props.match.params.productId;
    this.selectQuantity = this.selectQuantity.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.createItem = this.props.createItem.bind(this);
  }

  componentDidMount() {
    this.props.requestSingleProduct(this.props.match.params.productId);
  }

  // need function to handle clicking the 'Add to Cart' button
  handleClick(e) {
    e.preventDefault();
    // debugger;
    this.createItem(this.state).then(this.props.history.push('/cart'));
  }

  selectQuantity(e) {
    this.setState({quantity: parseInt(e.target.value)});
  }
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

              <select className="dropdown" onChange={this.selectQuantity}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>

              <Link to='/cart'>
                <button className="add" onClick={this.handleClick}>
                  Add to cart
                </button>
              </Link>

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
