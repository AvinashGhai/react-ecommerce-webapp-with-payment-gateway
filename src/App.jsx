import { Route, Routes } from "react-router-dom";
import Navigation from "./customer/component/navigation/navigation";
import Homepage from "./customer/pages/Homepage/homepage";
import Footer from "./customer/component/footer/footer";
import Product from "./customer/component/product/product";
import ProductDetails from "./customer/component/productDetails/productDetails";
import Cart from "./customer/component/cart/Cart";
import Checkout from "./customer/component/Checkout/Checkout";

export default function App() {
  return (
    <>
      {<Navigation />}

      {/*<Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Product />} />
      </Routes>
      <ProductDetails />*/}

      {/*<Cart />*/}
      {<Checkout/>}

      {<Footer />}

      
    </>
  );
}
