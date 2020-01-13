import React from 'react';
import { connect } from "react-redux";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CartIcon extends React.Component {
  render() {
    const {cart} = this.props;

    return(
      <div className='cart-icon'>
        <FontAwesomeIcon icon={faShoppingCart} className='menu-icon'/>
        {cart && cart.length > 0 && <span className='badge'>{cart.length}</span>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.home.cart,
  };
}

export default connect(mapStateToProps)(CartIcon)
