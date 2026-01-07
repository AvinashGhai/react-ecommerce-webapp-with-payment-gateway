import React from 'react';

const ProductCard = ({ men_kurta }) => {
  const discount =
    men_kurta.discountPercent ?? men_kurta.discountPercent;

  return (
    <div className="w-[15rem] m-3 transition-all cursor-pointer hover:scale-105 duration-300 ease-in-out flex flex-col gap-2 shadow-md p-3">
      
      <div className="h-[12rem]">
        <img
          className="h-full w-full object-cover object-top"
          src={men_kurta.image}
          alt={men_kurta.title}
        />
      </div>

      <div>
        <p className="font-semibold">{men_kurta.brand}</p>
        <p className="text-sm text-gray-800">{men_kurta.description}</p>
      </div>

      <div className="flex items-center gap-3">
        <p className="font-semibold">₹{men_kurta.discountedPrice}</p>
        <p className="text-sm line-through opacity-50">₹{men_kurta.price}</p>
        <p className="font-semibold text-green-600">{discount}% OFF</p>
      </div>

    </div>
  );
};

export default ProductCard;
