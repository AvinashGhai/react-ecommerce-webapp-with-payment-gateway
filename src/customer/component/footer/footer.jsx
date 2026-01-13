  import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2">
            <Typography variant="h5" className="font-bold mb-4">
              ShopName
            </Typography>
            <Typography variant="body2" className="text-gray-400 mb-6">
              Your one-stop destination for quality products. Shop with confidence and enjoy amazing deals every day.
            </Typography>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <Typography variant="subtitle2" className="mb-3 font-semibold">
                Subscribe to our newsletter
              </Typography>
              <div className="flex gap-2">
                <TextField
                  placeholder="Enter your email"
                  variant="outlined"
                  size="small"
                  className="flex-1"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                      '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                      '& input': { color: 'white' }
                    }
                  }}
                />
                <Button 
                  variant="contained" 
                  color="primary"
                  sx={{ 
                    minWidth: '100px',
                    textTransform: 'none',
                    fontWeight: 600
                  }}
                >
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <Typography variant="subtitle2" className="mb-3 font-semibold">
                Follow Us
              </Typography>
              <div className="flex gap-2">
                <IconButton 
                  color="inherit" 
                  size="small"
                  sx={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton 
                  color="inherit" 
                  size="small"
                  sx={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
                  }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton 
                  color="inherit" 
                  size="small"
                  sx={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton 
                  color="inherit" 
                  size="small"
                  sx={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton 
                  color="inherit" 
                  size="small"
                  sx={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
                  }}
                >
                  <YouTubeIcon />
                </IconButton>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <Typography variant="h6" className="font-semibold mb-4">
              Company
            </Typography>
            <div className="flex flex-col space-y-2">
              <Link href="#" color="inherit" underline="hover" className="text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="#" color="inherit" underline="hover" className="text-gray-400 hover:text-white transition-colors">
                Careers
              </Link>
              <Link href="#" color="inherit" underline="hover" className="text-gray-400 hover:text-white transition-colors">
                Press
              </Link>
              <Link href="#" color="inherit" underline="hover" className="text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="#" color="inherit" underline="hover" className="text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <Typography variant="h6" className="font-semibold mb-4">
              Customer Service
            </Typography>
            <div className="flex flex-col space-y-2">
              <Link href="#" color="inherit" underline="hover" className="text-gray-400 hover:text-white transition-colors">
                Help Center
              </Link>
              <Link href="#" color="inherit" underline="hover" className="text-gray-400 hover:text-white transition-colors">
                Track Order
              </Link>
              <Link href="#" color="inherit" underline="hover" className="text-gray-400 hover:text-white transition-colors">
                Returns
              </Link>
              <Link href="#" color="inherit" underline="hover" className="text-gray-400 hover:text-white transition-colors">
                Shipping Info
              </Link>
              <Link href="#" color="inherit" underline="hover" className="text-gray-400 hover:text-white transition-colors">
                Size Guide
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <Typography variant="h6" className="font-semibold mb-4">
              Legal
            </Typography>
            <div className="flex flex-col space-y-2">
              <Link href="#" color="inherit" underline="hover" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" color="inherit" underline="hover" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" color="inherit" underline="hover" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" color="inherit" underline="hover" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Typography variant="body2" className="text-gray-400">
              © {new Date().getFullYear()} ShopName. All rights reserved.
            </Typography>
            
            <div className="flex gap-6">
              <Link href="#" color="inherit" underline="hover" className="text-gray-400 hover:text-white text-sm">
                Privacy
              </Link>
              <Link href="#" color="inherit" underline="hover" className="text-gray-400 hover:text-white text-sm">
                Terms
              </Link>
              <Link href="#" color="inherit" underline="hover" className="text-gray-400 hover:text-white text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;