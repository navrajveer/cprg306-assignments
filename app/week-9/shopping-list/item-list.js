"use client"
import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onSelect }) => {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="mb-4 flex justify-center">
                <p className="text-xl font-semibold text-white mr-4">Sort By:</p>
                <button
                    className={`rounded-lg px-4 py-2 mr-2 ${sortBy === 'name' ? 'bg-gray-300' : 'bg-white'}`}
                    onClick={() => setSortBy('name')}
                >
                    Name
                </button>
                <button
                    className={`rounded-lg px-4 py-2 ${sortBy === 'category' ? 'bg-gray-300' : 'bg-white'}`}
                    onClick={() => setSortBy('category')}
                >
                    Category
                </button>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={onSelect}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
