import React from 'react'
import { StepLabel, Stepper } from '@mui/material'
import Step from '@mui/material/Step'

const Steps=[
    "placed",
    "Order confirmed",
    "shipped",
    "Out of Delivery",
    "Delivered"
]

const OrderTracker = ({activestep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activestep} alternativeLabel>
            {Steps.map((Label)=><Step>
                <StepLabel sx={{color:"#915FFD",fontSize:"40px"}}>{Label}"</StepLabel>
                </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker