import React, { useContext } from 'react';
import { NewsContext } from './NewsContext';
import { Link } from 'react-router-dom';

export default function NewsList() {
  const { newsList } = useContext(NewsContext);

  return (
    <div className="min-h-screen p-6 bg-gray-100 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">News List</h1>
        <Link
          to="/"
          className="inline-block mb-4 text-blue-600 hover:underline"
        >
          ← Back to News Create
        </Link>

        {newsList.length === 0 ? (
          <p className="text-gray-600">No news items yet.</p>
        ) : (
          <ul className="space-y-4">
            {newsList.map((item, index) => (
              <li key={index} className="border p-4 rounded-lg">
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-sm text-gray-500">By: {item.profileName}</p>
                <p className="text-sm text-gray-500">Date: {item.date}</p>
                {item.video && (
                  <video
                    src={URL.createObjectURL(item.video)}
                    controls
                    className="w-full mt-2 rounded"
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
