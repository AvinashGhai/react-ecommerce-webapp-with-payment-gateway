import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      
      {/* TOP FOOTER */}
      <Grid
        container
        spacing={6}
        className="max-w-7xl mx-auto px-10 py-16"
      >
        {/* Company */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Company
          </Typography>
          <div className="flex flex-col space-y-2">
            <Button variant="text" color="inherit">About Us</Button>
            <Button variant="text" color="inherit">Contact</Button>
            <Button variant="text" color="inherit">Blog</Button>
            <Button variant="text" color="inherit">Press</Button>
            <Button variant="text" color="inherit">Careers</Button>
            <Button variant="text" color="inherit">Partners</Button>
          </div>
        </Grid>

        {/* Solutions */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Solutions
          </Typography>
          <div className="flex flex-col space-y-2">
            <Button variant="text" color="inherit">Marketing</Button>
            <Button variant="text" color="inherit">Commerce</Button>
            <Button variant="text" color="inherit">Insights</Button>
            <Button variant="text" color="inherit">Support</Button>
          </div>
        </Grid>

        {/* Documentation */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Documentation
          </Typography>
          <div className="flex flex-col space-y-2">
            <Button variant="text" color="inherit">Guides</Button>
            <Button variant="text" color="inherit">API Status</Button>
          </div>
        </Grid>

        {/* Legal */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Legal
          </Typography>
          <div className="flex flex-col space-y-2">
            <Button variant="text" color="inherit">Privacy Policy</Button>
            <Button variant="text" color="inherit">Terms of Service</Button>
            <Button variant="text" color="inherit">Cookie Policy</Button>
            <Button variant="text" color="inherit">Claims</Button>
          </div>
        </Grid>
      </Grid>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-300">
        <Typography variant="body2">
          © 2023 My Company. All rights reserved.
        </Typography>

        <Typography variant="body2">
          Made with love by Me.
        </Typography>

        <Typography variant="body2">
          Icons made by{" "}
          <Link href="https://www.freepik.com" color="inherit" underline="always">
            Freepik
          </Link>{" "}
          from{" "}
          <Link href="https://www.flaticon.com/" color="inherit" underline="always">
            www.flaticon.com
          </Link>
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
