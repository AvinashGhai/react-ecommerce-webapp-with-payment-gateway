import React from 'react'

const HomeSectionCard = ({ product }) => {
  // Guard clause: return null if product is undefined or doesn't have required data
  if (!product) {
    return null;
  }

  // Destructure with fallback values
  const {
    image = 'https://via.placeholder.com/150',
    brand = 'Brand',
    title = 'Product Title',
    color = '',
    discountedPrice,
    price,
    discountPercent
  } = product;

  return (
    <div className='cursor-pointer flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-full border border-black/10 hover:shadow-2xl hover:scale-105 transition-transform duration-300'> 
      <div className='h-[13rem] w-full'>
        <img
          src={image}
          alt={title}
          className="object-cover object-top w-full h-full"
          onError={(e) => {
            // Fallback image if the original image fails to load
            e.target.src = 'https://via.placeholder.com/150?text=No+Image';
          }}
        />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{brand}</h3>
        <p className='mt-2 text-sm text-gray-600'>{title}</p>
        {color && (
          <p className='mt-1 text-xs text-gray-500'>Color: {color}</p>
        )}
        {discountedPrice && (
          <div className='mt-2 flex items-center gap-2'>
            <span className='text-lg font-semibold text-gray-900'>₹{discountedPrice}</span>
            {price && (
              <>
                <span className='text-sm text-gray-500 line-through'>₹{price}</span>
                {discountPercent && (
                  <span className='text-sm text-green-600 font-medium'>({discountPercent}% OFF)</span>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomeSectionCard