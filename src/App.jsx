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
    <div>
      {<Navigation />}

    </div>
      
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/:lavelone/:laveltwo/:lavelthree" element={<Product/>}></Route>

      </Routes>

      <div>
        {/*<Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Product />} />
      </Routes>
      <ProductDetails />*/}

      {/*<Cart />*/}
      {/*<Checkout/>*/}

      {/*<Order/>*/}
      {<OrderDetail/>}
      </div>

      
      

      {<Footer />}

      
    </>
  );
}
