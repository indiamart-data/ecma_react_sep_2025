// import React, { useEffect, useState } from 'react';
// import DataTable from '../common/DataTable';
// import productsAPIClient from '../../services/products-api-client';

// const AdminComponent = () => {
//     const [cState, setCState] = useState({ products: [], message: "Loading data, please wait..." });

//     useEffect(() => {
//         productsAPIClient.getAllProducts().then((data) => {
//             setCState({ products: data, message: "" });
//         }).catch((eMsg) => {
//             setCState({ products: [], message: eMsg });
//         })
//     }, []);

//     return (
//         <div className='text-center'>
//             <h1 className="text-primary">Admin Component</h1>
//             <hr />
//             <h3 className="text-danger">{cState.message}</h3>
//             <DataTable items={cState.products}>
//                 <h4 className="text-primary text-uppercase font-weight-bold">Products Table</h4>
//             </DataTable>
//         </div>
//     );
// };

// export default AdminComponent;

import React, { useEffect, useState } from 'react';
import DataTable from '../common/DataTable';
import { useProducts } from '../../contexts/ProductsAPIProvider';

const AdminComponent = () => {
    const { products, loading, error } = useProducts()

    const message = loading ? "Loading data, please wait..." : error;

    return (
        <div className='text-center'>
            <h1 className="text-primary">Admin Component</h1>
            <hr />
            <h3 className="text-danger">{message}</h3>
            <DataTable items={products}>
                <h4 className="text-primary text-uppercase font-weight-bold">Products Table</h4>
            </DataTable>
        </div>
    );
};

export default AdminComponent;

// Dependency injection - Easy to mock for testing
// Centralized management - Single source of truth
// Prop drilling avoidance - No need to pass services down multiple levels
// Loose coupling - Components don't directly depend on service implementations
// Easy swapping - Can change service implementations without touching components