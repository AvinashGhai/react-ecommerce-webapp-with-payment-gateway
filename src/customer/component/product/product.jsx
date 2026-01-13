'use client'

import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from '@heroicons/react/20/solid'
import FilterListIcon from '@mui/icons-material/FilterList'

import { men_kurta } from '../../../data/men/men_kurta'
import { filters } from './filterData'

const sortOptions = [
  { name: 'Price: Low to High', value: 'lowToHigh' },
  { name: 'Price: High to Low', value: 'highToLow' },
]

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)

  // ✅ SINGLE + MULTI FILTER HANDLER
  const handleFilter = (value, sectionId, type) => {
    const params = new URLSearchParams(location.search)

    if (type === 'single') {
      params.set(sectionId, value)
    } else {
      let values = params.get(sectionId)?.split(',') || []

      if (values.includes(value)) {
        values = values.filter(v => v !== value)
      } else {
        values.push(value)
      }

      if (values.length === 0) {
        params.delete(sectionId)
      } else {
        params.set(sectionId, values.join(','))
      }
    }

    navigate({ search: params.toString() })

  }

  return (
    <div className="bg-white">

      {/* ================= MOBILE FILTER ================= */}
      <Dialog
        open={mobileFiltersOpen}
        onClose={setMobileFiltersOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/25" />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative ml-auto h-full w-full max-w-xs bg-white shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-4">
              <h2 className="text-lg font-bold">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <form className="border-t border-gray-200 px-4">
              {filters.map(section => (
                <Disclosure key={section.id} as="div" className="border-b py-6">
                  <DisclosureButton className="flex w-full justify-between font-medium">
                    {section.name}
                    <PlusIcon className="h-5 w-5 data-[open]:hidden" />
                    <MinusIcon className="h-5 w-5 hidden data-[open]:block" />
                  </DisclosureButton>

                  <DisclosurePanel className="pt-4 space-y-3">
                    {section.options.map(option => (
                      <div key={option.value} className="flex gap-3 items-center">
                        <input
                          type={section.type === 'single' ? 'radio' : 'checkbox'}
                          name={section.id}
                          value={option.value}
                          checked={
                            section.type === 'single'
                              ? searchParams.get(section.id) === option.value
                              : searchParams.get(section.id)?.split(',').includes(option.value)
                          }
                          onChange={() =>
                            handleFilter(option.value, section.id, section.type)
                          }
                          className="h-4 w-4 text-indigo-600"
                        />
                        <label className="text-sm text-gray-600">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      {/* ================= MAIN ================= */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex justify-between items-center border-b pt-24 pb-6">
          <h1 className="text-4xl font-bold">Products</h1>

          <div className="flex items-center gap-4">
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center text-sm font-medium">
                Sort
                <ChevronDownIcon className="h-5 w-5 ml-1" />
              </MenuButton>

              <MenuItems className="absolute right-0 mt-2 w-40 bg-white shadow rounded">
                {sortOptions.map(option => (
                  <MenuItem key={option.value}>
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      {option.name}
                    </div>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>

            <button
              className="lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <FunnelIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* GRID */}
        <section className="pt-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* DESKTOP FILTERS */}
            <form className="hidden lg:block">
              <div className="flex items-center gap-2 mb-6">
                <FilterListIcon />
                <h2 className="text-lg font-semibold">Filters</h2>
              </div>

              {filters.map(section => (
                <Disclosure key={section.id} as="div" className="border-b py-4">
                  <DisclosureButton className="flex justify-between font-medium">
                    {section.name}
                    <PlusIcon className="h-5 w-5 data-[open]:hidden" />
                    <MinusIcon className="h-5 w-5 hidden data-[open]:block" />
                  </DisclosureButton>

                  <DisclosurePanel className="mt-3 space-y-2">
                    {section.options.map(option => (
                      <div key={option.value} className="flex gap-3 items-center">
                        <input
                          type={section.type === 'single' ? 'radio' : 'checkbox'}
                          name={section.id}
                          value={option.value}
                          checked={
                            section.type === 'single'
                              ? searchParams.get(section.id) === option.value
                              : searchParams.get(section.id)?.split(',').includes(option.value)
                          }
                          onChange={() =>
                            handleFilter(option.value, section.id, section.type)
                          }
                          className="h-4 w-4"
                        />
                        <label className="text-sm text-gray-600">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>

            {/* PRODUCTS */}
            <div className="lg:col-span-3 flex flex-wrap justify-center">
              {men_kurta.slice(0, 12).map(product => (
                <div
                  key={product.id || product.image}
                  className="w-[15rem] m-3 p-3 shadow hover:scale-105 transition"
                >
                  <img
                    loading="lazy"
                    src={product.image}
                    alt={product.brand}
                    className="h-64 w-full object-cover"
                  />

                  <p className="font-semibold mt-2">{product.brand}</p>
                  <p className="text-sm text-gray-600">{product.description}</p>

                  <div className="flex gap-3 mt-2">
                    <p>₹{product.discountedPrice}</p>
                    <p className="line-through text-gray-400">₹{product.price}</p>
                    <p className="text-green-600">
                      {product.discountPercent}% OFF
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>
    </div>
  )
}
