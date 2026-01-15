import React from 'react'
import { Grid } from '@mui/material'
import OrderCard from './OrderCard'

const orderStatus = [
  { label: "On The Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
]

const Order = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Grid container spacing={3}>
        
        {/* FILTER SIDEBAR */}
        <Grid size={3}>
          <div className="bg-white shadow-md rounded-lg p-5 sticky top-6">
            <h1 className="font-bold text-lg border-b pb-3">
              Filters
            </h1>

            <div className="mt-6 space-y-4">
              <h2 className="font-semibold text-sm text-gray-700">
                Order Status
              </h2>

              {orderStatus.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center gap-3"
                >
                  <input
                    id={option.value}
                    value={option.value}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={option.value}
                    className="text-sm text-gray-600 cursor-pointer"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        {/* ORDER LIST */}
        <Grid size={9}>
          <div className="space-y-4">
           {[1,1,1,1,1].map((item)=> <OrderCard />)}
          </div>
        </Grid>

      </Grid>
    </div>
  )
}

export default Order
