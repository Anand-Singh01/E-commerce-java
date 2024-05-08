import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../Customer/components/Cart/Cart';
import { Checkout } from '../Customer/components/Checkout/Checkout.jsx';
import Footer from "../Customer/components/Footer/Footer.jsx";
import { Navigation } from "../Customer/components/Navigation/Navigation.jsx";
import Order from '../Customer/components/Order/Order.jsx';
import OrderDetails from '../Customer/components/Order/OrderDetails.jsx';
import { Product } from "../Customer/components/Product/Product.jsx";
import { ProductDetails } from '../Customer/components/ProductDetails/ProductDetails.jsx';
import HomePage from '../Customer/pages/HomePage/HomePage';
const CustomerRoutes = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />} />
                <Route path='/product/:productId' element={<ProductDetails />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/account/order' element={<Order />} />
                <Route path='/account/order/:orderId' element={<OrderDetails />} />
            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRoutes