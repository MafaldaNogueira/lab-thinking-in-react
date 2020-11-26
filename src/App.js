import React from 'react';
import data from '../src/data.json'
import './App.css';
import FilterableProduct from './Components/FilterableProductTable';


class App extends React.Component {
  state = {
    products: data
  }
  
  render() {
    return (
      <div className="App">
      <h1> IronStore </h1>
    
      <FilterableProduct products={this.state.products} />
    
      </div>
    );
  }
}



export default App;
