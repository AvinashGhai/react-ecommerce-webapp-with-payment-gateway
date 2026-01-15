import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../cart/CartItem'

const OrderSummary = () => {
    return (
        <div className='space-y-3'>
            <div className='p-5 shadow-lg rounded-s-md border'>
                <AddressCard />
            </div>
            <div>
                <div className='lg:grid grid-cols-3 relative '>
                    <div className='col-span-2 space-y-2'>
                        {[1, 1, 1].map((items) => <CartItem />)}
                    </div>

                    <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                        <div className='border'>
                            <p className='uppercase font-bold opacity-50 pb-4'>Price details</p>
                            <hr />
                        </div>
                        <div className='space-y-3 font-semibold mb-10'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>4678</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Discount</span>
                                <span className='text-green-500'>-2342</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Delivery charges</span>
                                <span className='text-green-500'>Free</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Total Amount</span>
                                <span className='text-green-500'>2334</span>
                            </div>
                        </div>
                        <Button variant="contained" className="w-full mt-5" sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}>
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default OrderSummary