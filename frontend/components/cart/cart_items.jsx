import React from 'react';

class cartItems extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchEntireCart();
  }

  // item.product_id should give me access to:
    //product_name
    //image_url
    //..to display as part of the cart item information


  render() {
    console.log(this.props.items);
    return (

      <div className="cart-items">
        {this.props.items.map(item => {
          return(
            <div>
              {item.product_id}
              {item.quantity}
              Subtotal
              Remove Button
            </div>
          );
        })}
      </div>

    );
  }
}

export default cartItems;
