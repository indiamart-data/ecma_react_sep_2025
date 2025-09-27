import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductsContext';

const ProductDetailsComponent = () => {
    const { productId } = useParams();
    const { products } = useProducts();

    let product = products.find(product => product.id === parseInt(productId));

    let productView = <h2 className="text-warning">Product Not Found</h2>;

    if (product) {
        productView = (
            <>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <hr />
                <h4 className={product.status === 'Available' ? 'text-success' : 'text-danger'}>{product.status}</h4>
            </>
        );
    }

    return (
        <div>
            <h2 className="text-warning">Product Details</h2>
            {productView}
        </div>
    );
};

export default ProductDetailsComponent;