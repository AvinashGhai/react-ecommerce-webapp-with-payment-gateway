import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddform from './DeliveryAddform';
// import OrderSummary from './OrderSummary';
// import Login from './Login';
// import Payment from './Payment';

const steps = ['Login', 'Delivery Address', 'Order Summary','Payment'];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const querySearch = new URLSearchParams(location.search);
  const step = querySearch.get("step");
  
  // Get active step from URL or default to 0
  const activeStep = step ? parseInt(step) : 0;

  const handleNext = () => {
    const nextStep = activeStep + 1;
    navigate(`/checkout?step=${nextStep}`);
  };

  const handleBack = () => {
    const prevStep = activeStep - 1;
    navigate(`/checkout?step=${prevStep}`);
  };

  return (
    <div className='px-10 lg:px-20'>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            </Box>
            
            <div className='mt-5'>
              {activeStep === 0 && (
                <div>
                  <Typography variant="h6">Login</Typography>
                  {/* <Login /> */}
                  <Typography>Login component goes here</Typography>
                </div>
              )}
              {activeStep === 1 && <DeliveryAddform />}
              {activeStep === 2 && (
                <div>
                  <Typography variant="h6">Order Summary</Typography>
                  {/* <OrderSummary /> */}
                  <Typography>Order Summary component goes here</Typography>
                </div>
              )}
              {activeStep === 3 && (
                <div>
                  <Typography variant="h6">Payment</Typography>
                  {/* <Payment /> */}
                  <Typography>Payment component goes here</Typography>
                </div>
              )}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}