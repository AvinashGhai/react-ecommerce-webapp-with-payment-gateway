import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
      <div className='h-[13rem] w-[10rem]'>
        <img className='object-cover object-top w-full h-full' src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSPziSnXp-dV_smdxxlajJhtoHTRxEP7ajr17IuBqUhpqbeR_sYqm47TTebC56c3_6pCFo5J1YBnwfDr3PXR76N8aI147XqU1b-MpKjkRoKrGBChZqtouycnHI4YKzruMYrpGhd7RcvEw&usqp=CAc" alt="" />
      </div>

      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>Peter England</h3>
        <p className='mt-2 text-sm text-gray-600'>T-shirt</p>
      </div>
    </div>
  )
}

export default HomeSectionCard