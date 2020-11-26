import React from 'react';
import ProductRow from './ProductRow';
import ProductTable from './ProductTable ';
import SearchBar from './SearchBar';

class FilterableProduct extends React.Component {
  state = {
    products: this.props.products.data,
    filteredProducts: this.props.products.data,
  };

  handleFilterProducts = (query) => {
    let visibleProducts = [...this.state.products].filter((product) => {
      return product.name.toLowerCase().includes(query.toLowerCase());
    });

    this.setState({
      filteredProducts: visibleProducts,
    });
  };

  render() {
    return (
      <div>
        <SearchBar onFilter={this.handleFilterProducts} />
        <ProductTable filteredProducts={this.state.filteredProducts} />
      </div>
    );
  }
}

export default FilterableProduct;
