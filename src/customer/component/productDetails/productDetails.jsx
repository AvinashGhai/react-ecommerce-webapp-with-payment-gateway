import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import LensZoom from './lenszoom';
import Button from '@mui/material/Button'
import ProductViewCard from './ProductViewCard';
import { LinearProgress } from '@mui/material';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { men_kurta } from '../../../data/men/men_kurta';
import { useNavigate } from 'react-router-dom';

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
        { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
        { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
    ],
    sizes: [
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
    const navigate=useNavigate()
    const handleAddtoCart=()=>{
        navigate('/Cart')
    }
    return (
        <div className="bg-white lg:px-20">
            <div className="pt-6">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* Product Section */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto mt-6 mb-10'>
                    {/* Image gallery */}
                    <div className="flex flex-col gap-4">
                        {/* Main large image */}
                        <div className="aspect-square w-full">
                            <LensZoom
                                src={product.images[3].src}
                                alt={product.images[3].alt}
                                className="h-full w-full object-cover object-center rounded-lg"
                            />
                        </div>
                        
                        {/* Small thumbnail images */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="aspect-square">
                                <LensZoom
                                    src={product.images[0].src}
                                    alt={product.images[0].alt}
                                    className="h-full w-full object-cover object-center rounded-lg cursor-pointer hover:opacity-75"
                                />
                            </div>
                            <div className="aspect-square">
                                <LensZoom
                                    src={product.images[1].src}
                                    alt={product.images[1].alt}
                                    className="h-full w-full object-cover object-center rounded-lg cursor-pointer hover:opacity-75"
                                />
                            </div>
                            <div className="aspect-square">
                                <LensZoom
                                    src={product.images[2].src}
                                    alt={product.images[2].alt}
                                    className="h-full w-full object-cover object-center rounded-lg cursor-pointer hover:opacity-75"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Product info */}
                    <div className="flex flex-col">
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">{product.name}</h1>
                            
                            <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900'>
                                <p className='font-semibold'>₹799</p>
                                <p className='opacity-50 line-through'>₹839</p>
                                <p className='text-green-700 font-semibold'>5% OFF</p>
                            </div>

                            {/* Reviews */}
                            <div className="flex items-center space-x-3 mt-4">
                                <Rating name="read-only" value={4.5} readOnly />
                                <p className="text-sm text-gray-800 opacity-50">5654 ratings</p>
                                <p className='text-sm font-medium text-indigo-700 hover:text-indigo-600'>908 reviews</p>
                            </div>
                        </div>

                        <form className="space-y-6">
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                                <fieldset aria-label="Choose a color" className="mt-4">
                                    <div className="flex items-center gap-x-3">
                                        {product.colors.map((color) => (
                                            <div key={color.id} className="flex rounded-full outline -outline-offset-1 outline-black/10">
                                                <input
                                                    defaultValue={color.id}
                                                    defaultChecked={color === product.colors[0]}
                                                    name="color"
                                                    type="radio"
                                                    aria-label={color.name}
                                                    className={classNames(
                                                        color.classes,
                                                        'size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3',
                                                    )}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </fieldset>
                            </div>

                            {/* Sizes */}
                            <div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        Size guide
                                    </a>
                                </div>

                                <fieldset aria-label="Choose a size" className="mt-4">
                                    <div className="grid grid-cols-5 gap-3">
                                        {product.sizes.map((size, index) => (
                                            <label
                                                key={index}
                                                aria-label={size.name}
                                                className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white py-3 px-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 cursor-pointer"
                                            >
                                                <input
                                                    defaultValue={size.name}
                                                    defaultChecked={size === product.sizes[2]}
                                                    name="size"
                                                    type="radio"
                                                    disabled={!size.inStock}
                                                    className="sr-only"
                                                />
                                                <span className="group-has-checked:text-white">
                                                    {size.name}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </fieldset>
                            </div>

                            <Button 
                                variant="contained" 
                                fullWidth
                                sx={{ px: "2rem", py: "1rem", mt: 3 }}
                                onClick={handleAddtoCart}
                            >
                                Add to bag
                            </Button>
                        </form>

                        {/* Description and details */}
                        <div className="mt-10 border-t border-gray-200 pt-10">
                            <h3 className="text-sm font-medium text-gray-900">Description</h3>
                            <div className="mt-4 space-y-6">
                                <p className="text-base text-gray-600">{product.description}</p>
                            </div>
                        </div>

                        <div className="mt-10 border-t border-gray-200 pt-10">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {product.highlights.map((highlight) => (
                                        <li key={highlight} className="text-gray-400">
                                            <span className="text-gray-600">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10 border-t border-gray-200 pt-10">
                            <h2 className="text-sm font-medium text-gray-900">Details</h2>
                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">{product.details}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rating */}
                <section className='font-semibold text-lg pb-4 px-4 sm:px-6 lg:px-8'>
                    <h1>Recent Review and Ratings</h1>

                    <div className='border px-5 py-6'>
                        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
                            <div className='lg:col-span-7'>
                                <div className='space-y-5'>
                                    {[1,1,1].map((_, index) => (
                                        <ProductViewCard key={index} />
                                    ))}
                                </div>
                            </div>
                            <div className='lg:col-span-5'>
                                <h1 className='text-xl font-semibold pb-1'>Product Ratings</h1>
                                <div className='flex items-center space-x-3'>
                                    <Rating name="half Rating" value={4.5} readOnly precision={0.5} />
                                    <p className='opacity-50 font-medium'>1920 Ratings</p>
                                </div>

                                <div className='ml-10 mt-6 space-y-2'>
                                    <Box sx={{ width: '100%', mt: 4, mb: 4 }}>
                                        <Typography>Excellent</Typography>
                                        <LinearProgress
                                            variant="determinate"
                                            value={60}
                                            sx={{
                                                height: 12,
                                                borderRadius: 6,
                                                backgroundColor: '#eee',
                                                '& .MuiLinearProgress-bar': {
                                                    backgroundColor: '#16a34a',
                                                },
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ width: '100%', mt: 4, mb: 4 }}>
                                        <Typography>Very Good</Typography>
                                        <LinearProgress
                                            variant="determinate"
                                            value={45}
                                            sx={{
                                                height: 12,
                                                borderRadius: 6,
                                                backgroundColor: '#eee',
                                                '& .MuiLinearProgress-bar': {
                                                    backgroundColor: '#22c55e',
                                                },
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ width: '100%', mt: 4, mb: 4 }}>
                                        <Typography>Good</Typography>
                                        <LinearProgress
                                            variant="determinate"
                                            value={30}
                                            sx={{
                                                height: 12,
                                                borderRadius: 6,
                                                backgroundColor: '#eee',
                                                '& .MuiLinearProgress-bar': {
                                                    backgroundColor: '#facc15',
                                                },
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ width: '100%', mt: 4, mb: 4 }}>
                                        <Typography>Fair</Typography>
                                        <LinearProgress
                                            variant="determinate"
                                            value={20}
                                            sx={{
                                                height: 12,
                                                borderRadius: 6,
                                                backgroundColor: '#eee',
                                                '& .MuiLinearProgress-bar': {
                                                    backgroundColor: '#fb923c',
                                                },
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ width: '100%', mt: 4, mb: 4 }}>
                                        <Typography>Poor</Typography>
                                        <LinearProgress
                                            variant="determinate"
                                            value={10}
                                            sx={{
                                                height: 12,
                                                borderRadius: 6,
                                                backgroundColor: '#eee',
                                                '& .MuiLinearProgress-bar': {
                                                    backgroundColor: '#ef4444',
                                                },
                                            }}
                                        />
                                    </Box>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Similar Products */}
                <section className='pt-10 pb-10 px-4 sm:px-6 lg:px-8'>
                    <h1 className='text-2xl font-semibold pb-6'>Similar Products</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {men_kurta && Array.isArray(men_kurta) && men_kurta.length > 0 ? (
                            men_kurta.slice(0, 8).map((item, index) => {
                                if (!item) return null;
                                return (
                                    <HomeSectionCard 
                                        key={index} 
                                        product={item}
                                    />
                                );
                            })
                        ) : (
                            <p className='text-gray-500 col-span-full text-center'>No similar products available</p>
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}