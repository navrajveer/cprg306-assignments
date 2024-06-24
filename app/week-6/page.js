"use client";
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

const Page = () => {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
};

export default Page;
