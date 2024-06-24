"use client";

import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
