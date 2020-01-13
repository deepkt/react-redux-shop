import { connect } from "react-redux";
import { getStoreData, addToCart } from "./actions";

import Component from "./home";

function mapDispatchToProps(dispatch) {
  return({
    getStoreData: () => {dispatch(getStoreData())},
    addToCart: (product) => {dispatch(addToCart(product))},
  })
}

function mapStateToProps(state) {
  return {
    products: state.home.products,
    cart: state.home.cart,
    query: state.home.query,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)