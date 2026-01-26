import React from 'react'
import Homepage from '../pages/Homepage/homepage'
import Navigation from '../component/navigation/navigation'
import { Route, Routes } from 'react-router-dom'
import Product from '../component/product/product'
import ProductDetails from '../component/productDetails/productDetails'
import Checkout from '../component/Checkout/Checkout'
import Order from '../component/Order/Order'
import OrderDetail from '../component/Order/OrderDetail'

const CustomerRouters = () => {
  return (
    <div>
        <div>
          <Navigation/>
        </div>
        <Routes>
            <Route path='/login' element={<Homepage/>}></Route>
            <Route path='/register' element={<Homepage/>}></Route>
            <Route path='/' element={<Homepage/>}></Route>


            <Route path='/Cart' element={<Cart/>}></Route>
            <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetail/>}></Route>




        </Routes>
    </div>
  )
}

export default CustomerRouters