import React from 'react';


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

  render() {
    console.log(this.props.items);

    return (
      <div className="shopping-cart">
        {this.props.items.map(item => {
          return (
            <div key={item.id} className="cart-items">

              <div className="left-side">
                <img className="cart-item-img" src={item.image_url}/>
                <div className="cart-item-name">{item.name}</div>

                <select value={item.quantity} id="quantity_dropdown"
                  className="dropdown" onChange={this.updateQuantity(item)}>
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

                <div className="cart-item-quantity">{item.quantity}</div>

                <div className="cart-item-price">
                  ${(item.price * item.quantity)}.00
                <br/>
                  (${item.price}.00 each)
                </div>

              </div>
              <button>Remove</button>

            </div>
          );
        })}
      </div>
    );
  }
}

export default CartItems;
