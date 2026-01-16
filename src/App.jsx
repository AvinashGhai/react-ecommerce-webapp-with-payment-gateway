import { Route, Routes } from "react-router-dom";
import Navigation from "./customer/component/navigation/navigation";
import Homepage from "./customer/pages/Homepage/homepage";
import Footer from "./customer/component/footer/footer";
import Product from "./customer/component/product/product";
import ProductDetails from "./customer/component/productDetails/productDetails";
import Cart from "./customer/component/cart/Cart";
import Checkout from "./customer/component/Checkout/Checkout";
import Order from "./customer/component/Order/Order";
import OrderDetail from "./customer/component/Order/OrderDetail";

export default function App() {
  return (
    <>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        
        {/* Product listing page - matches /women/clothing/tops, /men/accessories/watches, etc */}
        <Route path="/:lavelone/:laveltwo/:lavelthree" element={<Product />} />
        
        {/* Product details page */}
        <Route path="/product/:id" element={<ProductDetails />} />
        
        {/* Cart page */}
        <Route path="/cart" element={<Cart />} />
        
        {/* Checkout page */}
        <Route path="/checkout" element={<Checkout />} />
        
        {/* Orders page */}
        <Route path="/orders" element={<Order />} />
        
        {/* Order details page */}
        <Route path="/order/:id" element={<OrderDetail />} />
      </Routes>

      <Footer />
    </>
  );
}