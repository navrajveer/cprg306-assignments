"use client";

import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-600">Quantity: {quantity}</p>
        </div>
        <span className="text-gray-600 capitalize">{category}</span>
      </div>
    </li>
  );
};

export default Item;
