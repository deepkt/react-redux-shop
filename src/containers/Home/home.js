import React from 'react';
import {Product} from '../../components/'
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount(){
    this.props.getStoreData();
  }

  handleAddToCart = product => {
    this.props.addToCart(product);
  }

  render() {
    const {products, query} = this.props;
    if(!products) return null;

    // Search Filter
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    
    return(
      <div className='home-container'>
        <div className='product-grid'>
          {
            filteredProducts.map((product, index) => {
              return <Product
                key={index}
                onAddToCart={this.handleAddToCart}
                product={product}/>
            })
          }
        </div>
      </div>
    )
  }
}

export default Home;