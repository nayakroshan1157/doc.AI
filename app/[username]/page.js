"use client";
import React, { use } from 'react';

const Username = ({ params }) => {
  // In Next.js 15, params is a Promise. You must 'use' it.
  const resolvedParams = use(params);

  return (
    <div className='flex items-center justify-center min-h-screen bg-sky-950 text-white'>
      <h1 className="text-3xl font-bold">
        Welcome, {resolvedParams.username}!
      </h1>
    </div>
  );
}

export default Username;


