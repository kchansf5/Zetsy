import React from 'react';

class CartItems extends React.Component {

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

  //
  // render() {
  //   console.log(this.state.CartItems);
  //   return (
  //
  //     <div className="cart-items">
  //       {this.props.items.map(item => {
  //         return(
  //           <div>
  //             {item.product_id}
  //             {item.quantity}
  //             Subtotal goes here
  //             Remove item button goes here
  //           </div>
  //         );
  //       })}
  //     </div>
  //
  //   );
  // }


  render() {
    debugger;
    return (
      <div className="cart-items">
        {this.props.items.map(item => {
          return (
            <div>

              <div>Why are there no cart items here???</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CartItems;
