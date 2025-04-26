import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4">
      <h1 className="text-4xl font-bold mb-4 text-green-700">Green Tips</h1>
      <p className="mb-6 text-lg text-center max-w-xl">
        Welcome! Get your daily free football predictions. For more, check out our VIP section!
      </p>
      <div className="w-full max-w-md bg-white rounded shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Today's Free Predictions</h2>
        <div className="text-gray-500 italic mb-2">(Predictions will appear here...)</div>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link href="/vip" className="w-full bg-yellow-500 text-white py-2 rounded text-center font-semibold hover:bg-yellow-600 transition">
          Go to VIP
        </Link>
        <a
          href="https://t.me/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-blue-500 text-white py-2 rounded text-center font-semibold hover:bg-blue-600 transition"
        >
          Join Telegram
        </a>
      </div>
    </div>
  );
}
