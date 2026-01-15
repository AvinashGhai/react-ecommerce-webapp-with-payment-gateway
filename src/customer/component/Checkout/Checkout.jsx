import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddform from './DeliveryAddform';
import AddressCard from '../AddressCard/AddressCard';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const querySearch = new URLSearchParams(location.search);
  const stepParam = querySearch.get('step');

  // Safe step parsing
  const activeStep =
    stepParam && !isNaN(stepParam)
      ? Math.min(Math.max(parseInt(stepParam), 0), steps.length - 1)
      : 0;

  const handleNext = () => {
    navigate(`/checkout?step=${activeStep + 1}`);
  };

  const handleBack = () => {
    navigate(`/checkout?step=${activeStep - 1}`);
  };

  return (
    <div className="px-10 lg:px-20">
      <Box sx={{ width: '100%' }}>
        {/* Stepper */}
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', gap: 2, pt: 3 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>

          <Button
            variant="contained"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
          >
            Next
          </Button>
        </Box>

        {/* Step Content */}
        <div className="mt-6">
          {activeStep === 0 && (
            <>
              <Typography variant="h6">Login</Typography>
              <Typography>Login component goes here</Typography>
            </>
          )}

          {activeStep === 1 && <DeliveryAddform />}

          {activeStep === 2 && (
            <>
              <OrderSummary/>
            </>
          )}

          {activeStep === 3 && (
            <>
              <Typography variant="h6">Payment</Typography>
              <Typography>Payment component goes here</Typography>
            </>
          )}
        </div>
      </Box>
    </div>
  );
}
