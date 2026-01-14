import React from 'react'
import { Grid, TextField } from '@mui/material';
import AddressCard from '../AddressCard/AddressCard';
import { Button } from '@mui/material';
import { Box } from '@mui/material';

const DeliveryAddform = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form data:', data);
    // Handle form submission here
  };

  return (
    <div className='mt-5'>
      <Grid container spacing={5} gridColumn={2}>
        {/* Saved Addresses Section */}
        <Grid item xs={12} lg={5}>
          <div className="border rounded-md shadow-sm bg-white h-[500px] overflow-y-auto">
            <div className='p-5 cursor-pointer hover:bg-gray-50 transition-colors border-b'>
              <AddressCard />
              <Button 
                sx={{ 
                  mt: 3, 
                  bgcolor: "RGB(145 83 254)", 
                  '&:hover': { bgcolor: "RGB(125 63 234)" } 
                }} 
                size="large" 
                variant='contained'
                fullWidth
              >
                Deliver Here
              </Button>
            </div>
          </div>

          {/* Add New Address Form - RIGHT */}
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-md shadow-sm bg-white">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2.5} sx={{ p: 3 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name='firstName'
                    label='First Name'
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name='lastName'
                    label='Last Name'
                    fullWidth
                    autoComplete='family-name'
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name='address'
                    label='Address'
                    fullWidth
                    autoComplete='street-address'
                    multiline
                    rows={3}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name='city'
                    label='City'
                    fullWidth
                    autoComplete='address-level2'
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name='state'
                    label='State/Province'
                    fullWidth
                    autoComplete='address-level1'
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name='zip'
                    label='Zip / Postal Code'
                    fullWidth
                    autoComplete='postal-code'
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name='phoneNumber'
                    label='Phone Number'
                    fullWidth
                    autoComplete='tel'
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    sx={{ 
                      py: 1.5, 
                      mt: 2, 
                      bgcolor: "RGB(145 83 254)", 
                      '&:hover': { bgcolor: "RGB(125 63 234)" } 
                    }}
                    size="large"
                    variant='contained'
                    type='submit'
                    fullWidth
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
        
        </Grid>

        
      </Grid>
    </div>
  )
}

export default DeliveryAddform