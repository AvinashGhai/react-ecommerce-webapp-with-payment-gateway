import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import OrderTracker from './OrderTracker';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { StarIcon } from '@heroicons/react/24/outline';

const OrderDetail = () => {
    return (
        <div className="px-5 lg:px-20 space-y-10">

            {/* Delivery Address */}
            <div>
                <h1 className="font-bold text-xl py-5">Delivery Address</h1>
                <AddressCard />
            </div>

            {/* Order Tracker */}
            <OrderTracker activestep={3} />

            {/* Product Card */}
            <Grid>
                {[1,1,1,1,1].map((item)=><Grid
                container
                alignItems="center"
                spacing={4}
                className="border rounded-lg shadow-md p-4 space-y-2 py-6" 
            >

                {/* Product Image */}
                <Grid>
                    <Grid item xs={12} md={2}>
                        <img
                            src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70"
                            alt="product"
                            className="w-[7rem] h-[7rem] object-cover object-top rounded"
                        />
                    </Grid>

                </Grid>


                {/* Product Details */}
                <Grid item xs={12} md={7} className="space-y-1">
                    <p className="font-semibold text-base">
                        Men Slim Black Jeans
                    </p>

                    <p className="text-xs opacity-60 font-semibold space-x-4">
                        <span>Color: Pink</span>
                        <span>Size: M</span>
                    </p>

                    <p className="text-sm">Seller: Linaria</p>
                    <p className="font-semibold">₹1099</p>
                </Grid>

                {/* Rate & Review – EXTREME RIGHT */}
                <Grid className="space-x-5" container>
                    <Grid item xs={12} md={3}>
                        <Box className="flex items-center justify-end w-full gap-2 cursor-pointer text-purple-600 hover:underline underline-offset-4">
                            <StarIcon className="w-5 h-5" />
                            <span className="font-medium text-sm">
                                Rate & Review Product
                            </span>
                        </Box>
                    </Grid>

                </Grid>


            </Grid>)}
            </Grid>
            
        </div>
    );
};

export default OrderDetail;
