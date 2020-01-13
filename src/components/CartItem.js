import React from 'react';

import NumericStepper from './NumericStepper';

class CartItem extends React.Component {
    onChangeQuantity = quantity => {
        const {index} = this.props;
        this.props.onChangeQuantity(index, quantity);
    }
    
    render() {
        const {product, count, onRemoveItem} = this.props;
        return(
        <div className='product-box'>
            <img src={product.img_url}/>
            <div className='cart-details'>
                <p className='product-name'>{product.name}</p>
                <div className='price-tag'>
                    <div className='discounted'> &#8377;{Math.round(product.price - (product.price * product.discount)/100)}</div>
                    <div className='actual'>{product.price}</div>
                    <div className='discount'>{product.discount}% off</div>
                </div>
                <NumericStepper count={count} onChange={this.onChangeQuantity}/>
                <a className='remove-btn' onClick={e=> onRemoveItem(product)}>REMOVE</a>
            </div>
        </div>
        )
    }
}

export default CartItem;