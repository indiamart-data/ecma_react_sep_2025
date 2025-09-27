import { Route, Routes } from "react-router-dom";
import HomeComponent from "../components/home/HomeComponent";
import AboutComponent from "../components/about/AboutComponent";
import NoMatchComponent from "../components/no-match/NoMatchComponent";
import ProductsComponent from "../components/products/ProductsComponent";
import AdminComponent from "../components/admin/AdminComponent";
import LoginComponent from "../components/login/LoginComponent";
import ProductsProvider from "../contexts/ProductsContext";
import ProductNotSelectedComponent from "../components/products/ProductsNotSelectedComponent";
import ProductDetailsComponent from "../components/products/ProductDetailsComponent";

export default (
    <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/products" element={
            <ProductsProvider>
                <ProductsComponent />
            </ProductsProvider>
        }>
            <Route path="" element={<ProductNotSelectedComponent />} />
            <Route path=":productId" element={<ProductDetailsComponent />} />
        </Route>
        <Route path="/admin" element={<AdminComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="*" element={<NoMatchComponent />} />
    </Routes>
);