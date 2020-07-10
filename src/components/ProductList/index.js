import React from 'react';

import { Container } from './styles';

import { products } from '../../api/products';
import Product from './Product';

const ProductList = () => {
    return (
        <Container>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </Container>
    );
}

export default ProductList;