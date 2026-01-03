import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black/10 hover:shadow-2xl hover:scale-105 transition-transform duration-300'> 
      <div className='h-[13rem] w-[10rem]'>
        <img
          src={product.image}
          alt={product.title}
          className="object-cover object-top w-full h-full"
        />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{product.title}</h3>
        <p className='mt-2 text-sm text-gray-600'>{product.category}</p>
      </div>
    </div>
  )
}

export default HomeSectionCard