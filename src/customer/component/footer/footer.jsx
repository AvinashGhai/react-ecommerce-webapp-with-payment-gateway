import { Typography } from '@mui/material'
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Grid className="bg-gray-800 text-white text-center mt-10"
        container
        sx={{ bgcolor: 'gray-800', color: 'white', py: 4 }}
        >
            <Grid item xs={12} md={3} sm={6}>
                <Typography variant="h6" className='pb-5'>
                    Company
                </Typography>
                <div>
                    <Button className="pb-5" variant="h6" gutterbottom>{' '} About Us{' '}</Button>
                </div>
                <div>
                    <Button className="pb-5" variant="h6" gutterbottom>{' '} Contact{' '}</Button>
                </div>
                <div>
                    <Button className="pb-5" variant="h6" gutterbottom>{' '} Blog{' '}</Button>
                </div>
                <div>
                    <Button className="pb-5" variant="h6" gutterbottom>{' '} Press{' '}</Button>
                </div>
                <div>
                    <Button className="pb-5" variant="h6" gutterbottom>{' '} Careers{' '}</Button>
                </div>
                <div>
                    <Button className="pb-5" variant="h6" gutterbottom>{' '} Partners{' '}</Button>
                </div>


            </Grid>
            <Grid item xs={12} md={3} sm={6}>
                <Typography variant="h6" className='pb-5'>
                    Solutions
                </Typography>
                <div>
                    <Button className="pb-5" variant="h6" gutterbottom>{' '} Marketing {' '}</Button>
                </div>
                <div>
                    <Button className="pb-5" variant="h6" gutterbottom>{' '} Commerce {' '}</Button>
                </div>
                <div>
                    <Button className="pb-5" variant="h6" gutterbottom>{' '} Insights {' '}</Button>
                </div>
                <div>
                    <Button className="pb-5" variant="h6" gutterbottom>{' '} Support {' '}</Button>
                </div>


            </Grid>
            <Grid item xs={12} md={3} sm={6}>
                <Typography variant="h6" className='pb-5'>
                    Documentation{' '}
                </Typography>
                <div>
                    <Button className="pb-5" variant="h6" gutterbottom>{' '} Guides {' '}</Button>
                </div>
                <div>
                    <Button className="pb-5" variant="h6" gutterbottom>{' '} API Status {' '}   </Button>
                </div>


            </Grid>
            <Grid item xs={12} md={3} sm={6}>
                <Typography variant="h6" className='pb-5'>
                    Legal
                </Typography>
                <div>
                    <Button className="pb-5" variant="h6" gutterbottom>{' '} Privacy Policy{' '}</Button>
                </div>
                <div>
                    <Button className="pb-5" variant="h6" gutterbottom>{' '} Terms of Service{' '}   </Button>
                </div>
                <div>
                    <Button className="pb-5" variant="h6" gutterbottom>{' '} Cookie Policy{' '}</Button>
                </div>
                <div>
                    <Button className="pb-5" variant="h6" gutterbottom>{' '} Claims {' '}</Button>
                </div>


            </Grid>

        </Grid>
<Grid className='pt-20' item xs={12}>
  <Typography variant="body2" component="p" align="center">
    &copy; 2023 My Company. All rights reserved.
  </Typography>

  <Typography variant="body2" component="p" align="center">
    Made with love by Me.
  </Typography>

  <Typography variant="body2" component="p" align="center">
    Icons made by{' '}
    <Link
      href="https://www.freepik.com"
      color="inherit"
      underline="always"
    >
      Freepik
    </Link>{' '}
    from{' '}
    <Link
      href="https://www.flaticon.com/"
      color="inherit"
      underline="always"
    >
      www.flaticon.com
    </Link>
  </Typography>
</Grid>
    </div>
  )
}

export default Footer