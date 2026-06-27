"use client"; // Yeh line mandatory hai!

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error); // Console mein error log karega
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-bold">Something went wrong!</h2>
      <button 
        onClick={() => reset()} 
        className="mt-4 px-4 py-2 bg-green-800 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}