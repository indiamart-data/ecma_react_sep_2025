import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { insertProduct, updateProduct } from '../../features/products/productsSlice';
import ProductFormComponent from './ProductFormComponent';

const ManageProductComponent = () => {
    const { id } = useParams();
    const products = useSelector(state => state.products.items);
    const dispatch = useDispatch();
    const [product, setProduct] = useState({ id: "", name: "", description: "", status: "" });
    const navigate = useNavigate();

    useEffect(() => {
        if (id && products.length > 0) {
            const productToEdit = products.find(p => p.id === id);
            if (productToEdit) {
                setProduct(productToEdit);
            }
        }
    }, [id, products]);

    const pageText = product.id ? "Edit Product" : "Add Product";

    const updateState = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    //   1. .unwrap() method: The code uses .unwrap(), which extracts the actual payload from the Redux Toolkit action result and throws an error if the
    //   operation fails.
    //   2. Navigation dependency: The component needs to wait for the save operation to complete successfully before navigating to '/products' (line 37). Without await, the
    //   navigation would happen immediately, even if the save operation fails.
    //   3. Error handling: The try-catch block can only properly catch errors from the async thunk if you use await with .unwrap().
    //   4. Sequential operations: The code flow is: save → wait for completion → navigate. This requires await to ensure proper sequencing.
    const saveProduct = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await dispatch(updateProduct(product)).unwrap();
            } else {
                await dispatch(insertProduct(product)).unwrap();
            }
            navigate('/products');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <ProductFormComponent pageText={pageText} product={product} onChange={updateState} onSave={saveProduct} />
        </>
    );
};

export default ManageProductComponent;