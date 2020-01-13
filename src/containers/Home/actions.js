const DATA_FETCHING = "DATA_FETCHING";
const DATA_FULFILLED = "DATA_FULFILLED";
const DATA_REJECTED = "DATA_REJECTED";

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const DO_SEARCH = "DO_SEARCH";


const getStoreData = () => {
  return (dispatch, getState) => {
    dispatch({ type: DATA_FETCHING });
    return fetch('https://api.myjson.com/bins/qzuzi')
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: DATA_FULFILLED,
                payload: data
              });
        })
        .catch(error => dispatch({type:DATA_REJECTED, error:error}));
  };
}

const addToCart = product => {
  return (dispatch, getState) => {
    dispatch({ type: ADD_TO_CART,  product:product});
  };
}

const removeFromCart = product => {
  return (dispatch, getState) => {
    dispatch({ type: REMOVE_FROM_CART,  product:product});
  };
}

const doSearch = query => {
  return (dispatch, getState) => {
    dispatch({ type: DO_SEARCH,  query:query});
  };
}

const homeReducer = (
  state = {
    isFetching: true,
    products: null,
    error: null,
    cart: [],
    query: '',
  },
  action) => {
  
  switch (action.type) {
    case "DATA_FETCHING":
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case "DATA_FULFILLED":
      return {
        ...state,
        isFetching: false,
        error: null,
        products: action.payload,
      };
    case "DATA_REJECTED":
      return {
        ...state,
        isFetching: false,
        data: null,
        error: action.error,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart.filter(product => product.id !== action.product.id)],
      };
    case "DO_SEARCH":
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
};

export { homeReducer, getStoreData, addToCart, removeFromCart, doSearch };
