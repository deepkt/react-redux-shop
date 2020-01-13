import React from 'react';
import classNames from 'classnames';

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
      query: '',
    };
  }

  showSearch = e => {
    this.searchInput.focus();
    this.setState({active: true});
  }

  onChange = e => {
    this.setState({query: e.currentTarget.value});
    this.props.onChangeQuery(e.currentTarget.value);
  }

  focusOut = e => {
    const {query} = this.state;
    if(query === '') this.setState({active: false});
  }

  render() {
    const {query, active} = this.state;

    return(
      <div className={classNames('search-bar', active ? 'active': '')}>
        <input type="text" value={query} placeholder='Search'
          className={classNames(active ? '': 'hidden-field')}
          onChange={this.onChange} onBlur={this.focusOut}
          ref={(input) => { this.searchInput = input; }}
        />
        <FontAwesomeIcon icon={faSearch} className='menu-icon' onClick={this.showSearch}/>
      </div>
    )
  }
}

export default Search;