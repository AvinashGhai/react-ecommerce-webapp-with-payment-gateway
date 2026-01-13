import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex item-center gap-3'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/sari/6/t/z/free-sequined-embroidered-saree-granthva-fab-unstitched-original-imaggsq6b4y2adwk.jpeg?q=70" alt="saree" />
                </div>

                <div>
                    <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900'>
                        <p className='font-semibold'> Embroided Saree</p>
                        <p className='font-medium opacity-50'>Black</p>
                        <p className='font-medium opacity-50'>Size: M</p>
                    </div>
                    <div className='flex space-x-5 items-center pt-6 text-gray-600'>
                        <p className='opacity-50 line-through'>₹839</p>
                        <p className='font-semibold'>₹799</p>
                        <p className='text-green-700 font-semibold'>5% OFF</p>
                    </div>
                </div>

            </div>

            <div className='lg:flex items-center lg:space-x-10 pt-4'>

                    <div className='flex items-center space-x-2'>
                        <IconButton>
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm'>3</span>
                        <IconButton sx={{ color: 'rgb(145, 85, 253)' }}>
                            <AddCircleOutlineIcon />
                        </IconButton>   
                    </div>
                    <div>
                        <Button sx={{ color: 'rgb(145, 85, 253)' }}>remove</Button>
                    </div>
                </div>
        </div>
    )
}

export default CartItem