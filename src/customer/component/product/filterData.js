export const filters = [
  {
    id: 'color',
    name: 'Color',
    type:'multi',
    options: [
      { value: 'white', label: 'White' },
      { value: 'black', label: 'Black' },
      { value: 'blue', label: 'Blue' },
      { value: 'green', label: 'Green' },
      { value: 'yellow', label: 'Yellow' },
      { value: 'pink', label: 'Pink' },
      { value: 'red', label: 'Red' },
      { value: 'grey', label: 'Grey' },
    ],
  },

  {
    id: 'size',
    name: 'Size',
    type:'multi',
    options: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
      { value: 'xxl', label: 'XXL' },
    ],
  },

  {
    id: 'price',
    name: 'Price',
    type:'multi',
    options: [
      { value: '0-499', label: 'Under ₹500' },
      { value: '500-999', label: '₹500 - ₹999' },
      { value: '1000-1499', label: '₹1000 - ₹1499' },
      { value: '1500-1999', label: '₹1500 - ₹1999' },
      { value: '2000+', label: 'Above ₹2000' },
    ],
  },

  {
    id: 'discount',
    name: 'Discount Range',
    type:'multi',
    options: [
      { value: '10', label: '10% And Above' },
      { value: '20', label: '20% And Above' },
      { value: '30', label: '30% And Above' },
      { value: '40', label: '40% And Above' },
      { value: '50', label: '50% And Above' },
      { value: '60', label: '60% And Above' },
      { value: '70', label: '70% And Above' },
      { value: '80', label: '80% And Above' },
    ],
  },
  {
    id: 'availability',
    name: 'Availability',
    type:'single',
    options: [
      { value: 'in-stock', label: 'In Stock' },
      { value: 'out-of-stock', label: 'Out of Stock' },
    ],
  },

]
