import React from 'react';


class CartItems extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchEntireCart();
  }

  render() {

    return (
      <div className="shopping-cart">
        {this.props.items.map(item => {
          return (
            <div className="cart-items">

              <div className="left-side">
                <img className="cart-item-img" src={item.image_url}/>
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-quantity">{item.quantity}</div>
                <div className="cart-item-price">${item.price}.00</div>
              </div>


            </div>
          );
        })}
      </div>
    );
  }
}

export default CartItems;
