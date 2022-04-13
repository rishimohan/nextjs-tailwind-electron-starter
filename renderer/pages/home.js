import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-28px)] bg-gray-800">
      <div className="text-4xl text-center text-white">Electron app with <br /> Next.js, TailwindCSS</div>
    </div>
  );
}

export default Home;
