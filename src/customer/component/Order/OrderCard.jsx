import React from 'react'
import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
    return (
        <div className='p-5 shadow-lg hover:shadow-2xl shadow-gray'>
            <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>

                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70" alt="" />
                        <div className='ml-5 space-y-2'>
                            <p className=''>Men Slim Black Jeans</p>
                            <p className='opacity-50 text-xs font-semibold'>Size:M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color:Black</p>

                        </div>
                    </div>

                </Grid>

                <Grid item xs={2}>
                    <p> 1099 </p>

                </Grid>

                <Grid item xs={4}>
                    {true && <div>
                        <p>
                            <span>
                                <AdjustIcon sx={{ width: "20px", height: "20px" }} className='text-green-500 mr-2 text-sm' />
                                Delivered on january 03 2026
                            </span>

                        </p>
                        <p className='text-xs'>
                            Your Item has been Delivered
                        </p>

                    </div>}

                    {false && <div>
                        <p>
                            <span>
                                Expected Delivery 03 january 2026
                            </span>
                        </p>


                    </div>}

                </Grid>

            </Grid>
        </div>
    )
}

export default OrderCard