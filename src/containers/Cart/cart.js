import React from 'react';
import {CartItem} from '../../components/'
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount(){
    const {cart} = this.props;

    const allCartItems = cart.reduce(function (r, a) {
        r[a.id] = r[a.id] || [];
        r[a.id].push(a);
        return r;
    }, Object.create(null));

    const cartItems = Object.keys(allCartItems).map(function(key, index) {
      return {
        product: allCartItems[key][0],
        count: allCartItems[key].length,
        discount: Math.round((allCartItems[key][0].price * allCartItems[key][0].discount)/100),
        priceAfterDiscount: Math.round(allCartItems[key][0].price - (allCartItems[key][0].price * allCartItems[key][0].discount)/100),
      }
    })
    this.setState({cartItems:cartItems})
  }

  handleChangeQuantity = (index, quantity) => {
    let {cartItems} = this.state;
    cartItems[index].count = quantity;
    this.setState({cartItems:cartItems})
  }

  removeItem = product => {
    let {cartItems} = this.state;
    cartItems = cartItems.filter(item => item.product.id !== product.id)
    this.setState({cartItems:cartItems})
    // Remove from cart
    this.props.removeFromCart(product);
  }

  render() {
    const {cartItems} = this.state;
    if(!cartItems || cartItems.length <= 0) return <div style={{textAlign:'center'}}>Your cart is empty</div>;

    return(
      <div className='cart-container'>
        <div className='cart-items'>
          {
            cartItems.map((item, index) => {
              return <CartItem
                  key={index}
                  index={index}
                  count={item.count}
                  product={item.product}
                  onChangeQuantity = {this.handleChangeQuantity}
                  onRemoveItem = {this.removeItem}
                  />
            })
          }
        </div>
        <div className='price-details'>
          <div className='price-box'>
            <p className='title'>Price Details</p>
            <div className='price-breakdown'>
              <div className='price-item'>
                <label>Price ({cartItems.reduce((accum, curr) => accum + curr.count, 0)} item)</label>
                <span className='price-tag'>
                  &#8377;
                  {Math.round(
                    cartItems.reduce((accum, curr) => accum + (curr.product.price * curr.count), 0)
                  )}
                </span>
              </div>

              <div className='price-item'>
                <label>Discount</label>
                <span className='price-tag'>
                &#8377;
                {Math.round(
                    cartItems.reduce((accum, curr) => accum + (curr.discount * curr.count), 0)
                )}
                </span>
              </div>
            </div>
            <div className='price-total'>
              <label>Total Payable</label>
              <span className='total-val'>
                &#8377;
                {Math.round(
                    cartItems.reduce((accum, curr) => accum + (curr.priceAfterDiscount * curr.count), 0)
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cart;