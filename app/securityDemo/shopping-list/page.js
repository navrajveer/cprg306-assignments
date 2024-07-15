"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

const Page = () => {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (itemName) => {
        const cleanName = itemName
            .split(',')[0]
            .trim()
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '');
        setSelectedItemName(cleanName);
    };

    return (
        <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-5xl font-bold text-center mb-10 text-black-500">
                Shopping List
            </h1>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1">
                    <ItemList items={items} onSelect={handleItemSelect} />
                    <NewItem onAddItem={handleAddItem} />
                </div>
                <div className="flex-1 ml-4">
                    {selectedItemName && (
                        <div className="mt-4 md:mt-0 p-4 bg-white rounded-lg shadow-md">
                            <h2 className="text-3xl font-bold text-center mb-4">
                                Meal Ideas
                            </h2>
                            <MealIdeas ingredient={selectedItemName} />
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Page;
