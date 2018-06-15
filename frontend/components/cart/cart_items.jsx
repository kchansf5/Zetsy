import React from 'react';
import { Link } from 'react-router-dom';

class CartItems extends React.Component {

  constructor(props) {
    super(props);


  }

  componentDidMount(){
    this.props.fetchEntireCart();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateQuantity(item) {
    return (e) => this.props.updateItem({
      id: item.id,
      product_id: item.product_id,
      user_id: this.props.user_id,
      quantity: e.target.value
    });
  }


  handleClick(e) {
    e.preventDefault();
    this.props.removeItem(this.item.id);
  }

  render() {

    const subtotals = [];
    if (this.props.items.length > 0) {
    return (
      <div className="shopping-cart">
        <div className="num-items">{this.props.items.length} item(s) in your cart</div>
        {this.props.items.map(item => {
          const subtotal = item.price * item.quantity;
          subtotals.push(subtotal);
          return (
            <div>
              <div key={item.id} className="cart-items">

                  <div className="single-item">
                    <Link to={`/products/${item.product_id}`}>
                      <img className="cart-item-img" src={item.image_url}/>
                    </Link>

                    <div className="col2">
                      <div className="cart-item-name">{item.name}</div>
                      <button className="remove" onClick={()=>this.props.deleteItem(item.id)}>Remove</button>
                    </div>

                    <div className="col3">
                      <select className="cart-item-quantity" value={item.quantity}
                        id="quantity_dropdown" className="dropdown"
                        onChange={this.updateQuantity(item)}>
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
                    </div>

                    <div className="col4">
                      <div className="subtotal">${subtotal}.00</div>
                      <div className="item-price">(${item.price}.00 each)</div>
                    </div>

                </div>



              </div>
              <div className="total">Item(s) total ${subtotals.reduce((acc, el)=> acc + el)}.00</div>
          </div>
          );
        })}
        <button onClick={()=>this.props.deleteAllItems()}>Checkout</button>
        <Link to="/products"><button>Keep Shopping</button></Link>
      </div>

    );
  } else {
    return (
      <div className="empty-cart">
        <div className="empty-text">Your cart is empty.</div>
        <div className="keep-shopping2">
          <Link to="/products"><div className="discover">Discover a piece of Hyrule for yourself</div></Link>
        </div>
      </div>
    );
  }
  }
}

export default CartItems;
