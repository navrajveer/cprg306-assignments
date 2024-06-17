"use client";

import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = itemsData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={() => setSortBy('name')}
          style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}
          className="px-4 py-2 mr-2 border rounded"
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }}
          className="px-4 py-2 mr-2 border rounded"
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('group')}
          style={{ backgroundColor: sortBy === 'group' ? 'lightblue' : 'white' }}
          className="px-4 py-2 border rounded"
        >
          Group by Category
        </button>
      </div>
      <ul className="divide-y divide-gray-300">
        {sortBy === 'group' ? (
          Object.keys(groupedItems).sort().map(category => (
            <div key={category}>
              <h2 className="capitalize font-bold">{category}</h2>
              {groupedItems[category].sort((a, b) => a.name.localeCompare(b.name)).map(item => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </div>
          ))
        ) : (
          sortedItems.map(item => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default ItemList;
