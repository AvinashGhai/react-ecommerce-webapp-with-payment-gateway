'use client'

import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
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
  const [sortBy, setSortBy] = useState('lowToHigh')

  const location = useLocation()
  const navigate = useNavigate()
  const { lavelone, laveltwo, lavelthree } = useParams()
  const searchParams = new URLSearchParams(location.search)

  // ✅ GET CATEGORY TITLE FROM URL PARAMS
  const getCategoryTitle = () => {
    if (lavelone && laveltwo && lavelthree) {
      return `${lavelone.charAt(0).toUpperCase() + lavelone.slice(1)} - ${laveltwo.charAt(0).toUpperCase() + laveltwo.slice(1)} - ${lavelthree.charAt(0).toUpperCase() + lavelthree.slice(1)}`
    }
    return 'Products'
  }

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

  // ✅ SORT HANDLER
  const handleSort = (sortValue) => {
    setSortBy(sortValue)
    // Add your sorting logic here based on sortValue
  }

  // ✅ GET FILTERED PRODUCTS
  const getFilteredProducts = () => {
    let products = [...men_kurta]

    // Apply category filters based on URL params
    if (lavelthree && lavelthree !== 'all') {
      // Filter products based on category
      products = products.filter(product => {
        // Add your filtering logic here based on lavelone, laveltwo, lavelthree
        return true
      })
    }

    // Apply sort
    if (sortBy === 'lowToHigh') {
      products.sort((a, b) => a.discountedPrice - b.discountedPrice)
    } else if (sortBy === 'highToLow') {
      products.sort((a, b) => b.discountedPrice - a.discountedPrice)
    }

    return products.slice(0, 12)
  }

  const filteredProducts = getFilteredProducts()

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
          <h1 className="text-4xl font-bold">{getCategoryTitle()}</h1>

          <div className="flex items-center gap-4">
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center text-sm font-medium">
                Sort
                <ChevronDownIcon className="h-5 w-5 ml-1" />
              </MenuButton>

              <MenuItems className="absolute right-0 mt-2 w-40 bg-white shadow rounded z-10">
                {sortOptions.map(option => (
                  <MenuItem key={option.value}>
                    <button
                      onClick={() => handleSort(option.value)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {option.name}
                    </button>
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
                  <DisclosureButton className="flex justify-between font-medium w-full">
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
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div
                    key={product.id || product.image}
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="w-[15rem] m-3 p-3 shadow hover:scale-105 transition cursor-pointer"
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
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-gray-600 text-lg">No products found</p>
                </div>
              )}
            </div>

          </div>
        </section>
      </main>
    </div>
  )
}