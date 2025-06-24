import React, { useContext } from 'react';
import { NewsContext } from './NewsContext';
import { Link } from 'react-router-dom';
import { FaEye, FaUserCircle, FaPlay, FaTrash } from 'react-icons/fa';

export default function NewsList() {
  const { newsList, deleteNews } = useContext(NewsContext);

  return (
    <div className="min-h-screen p-6 bg-gray-100 font-sans">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">News List</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            ← Back to News Create
          </Link>
        </div>

        {newsList.length === 0 ? (
          <p className="text-gray-600">No news items yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="py-3 px-4">Video</th>
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Post Date</th>
                  <th className="py-3 px-4">Views</th>
                  <th className="py-3 px-4">User Profile</th>
                  <th className="py-3 px-4">User Name</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {newsList.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition duration-200"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-blue-700 text-white text-xs rounded flex items-center justify-center font-bold">
                          LIVE
                        </div>
                        <FaPlay className="text-blue-600" />
                      </div>
                    </td>

                    <td className="py-3 px-4 font-medium text-gray-800">
                      {item.title}
                    </td>

                    <td className="py-3 px-4 text-gray-600">{item.date}</td>

                    <td className="py-3 px-4 text-gray-600 flex items-center gap-1">
                      <FaEye className="text-gray-500" />
                      663k
                    </td>

                    <td className="py-3 px-4">
                      <FaUserCircle className="text-2xl text-gray-500" />
                    </td>

                    <td className="py-3 px-4 text-gray-700">
                      {item.profileName || 'John Smith'}
                    </td>

                    <td className="py-3 px-4">
                      <button
                        onClick={() => deleteNews(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
