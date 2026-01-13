import React from 'react'
import Grid from '@mui/material/Grid'
import { Box, Avatar } from '@mui/material'
import Rating from '@mui/material/Rating'

const ProductViewCard = () => {
  return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className="text-white" sx={{width:56, height:56, bgcolor:"#9155fd"}}>R</Avatar>
                </Box>
            </Grid>

            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p>Raam</p>
                        <p className='opacity-50 font-medium'>10 january,2026</p>
                    </div>

                </div>
               < Rating name="half Rating" value={4.5} readOnly precision={0.5} />
               <p>nice T-shirts, i recommmend it to everyone</p>
            </Grid>

        </Grid>
    </div>
  )
}

export default ProductViewCard