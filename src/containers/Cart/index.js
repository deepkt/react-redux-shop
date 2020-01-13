import { connect } from "react-redux";
import { removeFromCart } from "../Home/actions";

import Component from "./cart";

function mapDispatchToProps(dispatch) {
  return({
    removeFromCart: (product) => {dispatch(removeFromCart(product))},
  })
}

function mapStateToProps(state) {
  return {
    products: state.home.products,
    cart: state.home.cart,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)