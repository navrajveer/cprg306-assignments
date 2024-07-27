"use client";

import React from 'react';
import { useUserAuth } from "./_util/auth-context";
import Link from 'next/link';

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <main className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      {!user ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Welcome to Shopping List App</h1>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700"
            onClick={handleSignIn}
          >
            Login with GitHub
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome, {user.displayName}</h1>
          <p className="text-gray-700 mb-4">Email: {user.email}</p>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-700 mb-4"
            onClick={handleSignOut}
          >
            Logout
          </button>
          <Link href="/securityDemo/shopping-list">
            <div className="block px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 cursor-pointer">
              Go to Shopping List
            </div>
          </Link>
        </div>
      )}
    </main>
  );
};

export default Page; 
