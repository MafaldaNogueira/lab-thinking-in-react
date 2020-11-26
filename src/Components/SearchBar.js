import React from 'react';

class SearchBar extends React.Component {
  state = {
    search: '',
    stock: false,
  };

  handleChange = (event) => {
    this.props.onFilter(event.target.value);

    this.setState({
      search: event.target.value
    });
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
        <input
          type="checkbox"
          name="stock"
          onChange={this.handleChange}
          checked={this.state.stock}
        />
      </form>
    );
  }
}

export default SearchBar;
