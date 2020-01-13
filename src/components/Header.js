import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { doSearch } from "../containers/Home/actions";

import headerLogo from '../assets/logo.png';

import { Search, CartIcon } from './';

class Header extends React.Component {
  handleSearch = query => {
    this.props.doSearch(query);
  }
  render(){
    return(
      <header className='header'>
        <div className='brand'>
          <Link to='/'>
            <img src={headerLogo} className='logo'/>
          </Link>
        </div>
        <div className='menu-right'>
          <Search onChangeQuery={this.handleSearch}/>
          <Link to='/cart'>
            <CartIcon/>
          </Link>
        </div>
      </header>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return({
    doSearch: (query) => {dispatch(doSearch(query))},
  })
}
function mapStateToProps(state) {
  return {
    cart: state.home.cart,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)