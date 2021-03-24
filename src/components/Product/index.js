import React from 'react';
import Product from './Product';


function ProductList({ products = [] } = {}) {
    const selectedComponentProduct = products.map((product, index) => <Product key={index} data={product} />)

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
            {selectedComponentProduct}
        </div>
    )
}

export default ProductList