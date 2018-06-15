import React from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

class ProductItem extends React.Component {

  constructor(props){

    super(props);

    this.state = {};
    this.state.quantity = 1;
    this.state.product_id = this.props.match.params.productId;
    this.selectQuantity = this.selectQuantity.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.createItem = this.props.createItem.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0,0);
    this.props.requestSingleProduct(this.props.match.params.productId);
  }

  handleClick(e) {
    e.preventDefault();

    this.createItem(this.state).then(() => this.props.history.push('/cart'));
  }

  selectQuantity(e) {
    this.setState({quantity: parseInt(e.target.value)});
  }

  render() {
    if (this.props.singleProduct) {
      return (
        <div className="single-product-listing">

          <div className="product-image">
            <img src={this.props.singleProduct.image_url} />
            <div className="description">
              <div className="des-text" >
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
              <NumberFormat value={this.props.singleProduct.price + '.00'}
                displayType={'text'} thousandSeparator={true} prefix={'$'}/>
            </div>

            <div className="quantity">
              <div className="text">
                Quantity
              </div>

              <select className="quantity-dropdown" value={this.state.quantity}
                onChange={this.selectQuantity}>
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
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
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
