import React from 'react'
import Homepage from '../pages/Homepage/homepage'

const CustomerRouters = () => {
  return (
    <div>
        <div>

        </div>
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>


        </Routes>
    </div>
  )
}

export default CustomerRouters