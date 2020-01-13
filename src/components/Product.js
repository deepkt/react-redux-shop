import React from 'react';


class Product extends React.Component {
    addToCart = () => {
        const {product, onAddToCart} = this.props;
        onAddToCart(product)
    }
    
    render() {
        const {product} = this.props;
        return(
            <div className='product-box'>
                <img src={product.img_url}/>
                <p className='product-name'>{product.name}</p>
                <div className='price-tag'>
                    <div className='discounted'>{Math.round(product.price - (product.price * product.discount)/100)}</div>
                    <div className='actual'>{product.price}</div>
                    <div className='discount'>{product.discount}% off</div>
                </div>
                <button className='add-cart-button' onClick={this.addToCart}>Add to Cart</button>
            </div>
        )
    }
}

export default Product;