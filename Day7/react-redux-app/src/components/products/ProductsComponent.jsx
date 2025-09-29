import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts } from "../../features/products/productsSlice";

import LoaderAnimation from '../common/LoaderAnimation';
import AddProductButton from "./AddProductButton";
import ProductListComponent from "./ProductListComponent";

import { Toast, ToastContainer } from 'react-bootstrap';
import ConfirmModal from '../common/ConfirmModal';

const ProductsComponent = () => {
    const products = useSelector(state => state.products.items);
    const status = useSelector(state => state.products.status);
    const error = useSelector(state => state.products.error);

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [productToDelete, setproductToDelete] = useState(false);

    //   1. Redux Toolkit's createAsyncThunk: fetchProducts is created using createAsyncThunk (line 111 in productsSlice.js), which returns a Redux action creator, not a
    //   Promise.
    //   2. dispatch() pattern: When you call dispatch(fetchProducts()), you're dispatching a Redux action. The async operation is handled internally by Redux    
    //    Toolkit, and the component doesn't need to await it.
    //   3. State-driven updates: The component uses Redux selectors (useSelector) to watch for changes in status, error, and products state. When the async operation
    //   completes, these state values automatically update and trigger re-renders.
    //   4. No return value needed: The component doesn't need the return value of the dispatch call - it relies on the Redux state changes to know when the operation is
    //   complete.
    useEffect(() => {
        if (status === 'idle')
            dispatch(fetchProducts());
    }, [dispatch, status]);

    const handleRefresh = () => {
        dispatch(fetchProducts());
    }

    const handleDeleteProduct = (product) => {
        setShow(true);
        setproductToDelete(product);
    }

    const handleYes = async () => {
        try {
            await dispatch(deleteProduct(productToDelete.id)).unwrap();
            setShow(false);
            setToastMessage('Product deleted successfully');
            setShowToast(true);
        }
        catch (error) {
            setShow(false);
            setToastMessage(`Failed to delete product: ${error}`);
            setShowToast(true);
        }
    };

    if (error) {
        return (
            <div className="alert alert-danger" role="alert">
                Error: {error}
            </div>
        );
    } else if (status === 'loading') {
        return <LoaderAnimation />
    } else {
        return (
            <>
                <div className="mt-5 mb-3">
                    <AddProductButton />
                    <button className='btn btn-warning btn-lg mx-2' onClick={handleRefresh}>
                        <span className='bi bi-arrow-clockwise'></span>
                        &nbsp;Refresh Products
                    </button>
                </div>
                <ProductListComponent products={products} onDelete={handleDeleteProduct} />
                <ToastContainer position="top-end" className="p-3">
                    <Toast
                        show={showToast}
                        onClose={() => setShowToast(false)}
                        delay={4000}
                        autohide
                        bg={toastMessage.includes('Failed') ? 'danger' : 'success'}
                    >
                        <Toast.Header>
                            <strong className="me-auto">
                                {toastMessage.includes('Failed') ? 'Error' : 'Success'}
                            </strong>
                        </Toast.Header>
                        <Toast.Body className="text-white">
                            {toastMessage}
                        </Toast.Body>
                    </Toast>
                </ToastContainer>
                <ConfirmModal show={show} title={"Confirm Delete Product"}
                    message={`Are you sure, you want to delete this product ${productToDelete.name}?`}
                    handleYes={handleYes}
                    handleNo={() => {
                        setShow(false);
                    }} />
            </>
        );
    }
};

export default ProductsComponent;