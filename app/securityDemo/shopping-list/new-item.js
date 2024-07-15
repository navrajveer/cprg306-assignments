"use client"
import React from 'react';
import { useState } from 'react';

const NewItem = ({ onAddItem }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');
    const [idCounter, setIdCounter] = useState(1);
    const [useIds, setUseIds] = useState([]);

    const generateId = () => {
        let newId;
        do {
            newId = `id-${idCounter}`;
            setIdCounter(idCounter + 1);
        } while (useIds.includes(newId));

        setUseIds([...useIds, newId]);
        return newId;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            id: generateId(),
            name,
            quantity,
            category,
        };

        onAddItem(newItem);

        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="absolute top-8 left-0 ml-10 mt-20 max-w-md rounded-md bg-purple-100"
        >
            <input
                className="m-4 rounded-md border-2 border-purple-500"
                type="text"
                placeholder="Item Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                className="m-4 rounded-md border-2 border-purple-500 justify-content-center"
                type="number"
                min="1"
                max="99"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                required
            />
            <select
                className="m-4 rounded-md border-2 border-purple-500"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            >
                <option>Produce</option>
                <option>Dairy</option>
                <option>Bakery</option>
                <option>Meat</option>
                <option>Frozen Foods</option>
                <option>Canned Goods</option>
                <option>Dry Goods</option>
                <option>Beverages</option>
                <option>Snacks</option>
                <option>Household</option>
                <option>Other</option>
            </select>
            <div className="m-4">
                <button className="container max-w-md mx-right bg-purple-100 shadow-md ml-10 rounded-lg border-2 border-purple-500 w-20 h-10 hover:bg-purple-500">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default NewItem;
