import React from 'react';
import ProductRow from './ProductRow';



class ProductTable extends React.Component {


    render() {
        return (
            <table>
            <tr>
                <td> Name</td>
                <td> Price</td>
            </tr>
            <tbody>
            {this.props.filteredProducts.map((product) => {
            return <ProductRow key={product.id} product={product} />

            })}
            </tbody>
        </table>
 
        )
    }

}

export default ProductTable;