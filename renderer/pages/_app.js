import React from 'react';
import '../styles/app.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex items-start overflow-hidden">
      <div className="h-screen overflow-auto w-full flex flex-none">
        <div className="w-full">
          <div
            style={{ "-webkit-app-region": "drag" }}
            className="w-full sticky top-0 py-1 text-sm font-medium bg-gray-600 text-gray-200 backdrop-blur cursor-move text-center"
          >
            Next.js + Tailwind + Electron
          </div>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
