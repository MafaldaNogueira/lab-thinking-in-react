import React from 'react';
import ProductTable from './ProductTable ';

class SearchBar extends React.Component {
  state = {
    search: '',
    stock: false,
  };

  handleChange = (event) => {
    this.setState(
      {
        search: event.target.value,
      },
      () => {
        this.props.onFilter(this.state);
      }
    );
  };

  handleCheck = () => {
    this.setState(
      {
        stock: !this.state.stock,
      },
      () => {
        this.props.onFilter(this.state);
      }
    );
  };

  render() {
    return (
      <form>
        <label>Search</label>
        <input
          type="text"
          name="search"
          onChange={this.handleChange}
          value={this.state.search}
        />

        <label> Only show products on stock</label>
        <input type="checkbox" name="stock" onChange={this.handleCheck} />
      </form>
    );
  }
}

export default SearchBar;
