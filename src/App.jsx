import React, { useState } from 'react';
import { FaCamera, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function App() {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState('');
  const [profileName, setProfileName] = useState('');
  const [date, setDate] = useState('');
  const [isNewsOpen, setIsNewsOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-60 bg-white border-r">
        <div className="p-6 font-bold text-blue-600 text-xl">LzyCrazy</div>

        <div className="mt-4 space-y-2">
          {/* Dashboard Title */}
          <h2 className="text-sm text-gray-500 font-semibold px-6 uppercase tracking-wide">
            Dashboard
          </h2>

          {/* News Dropdown */}
          <div
            className="flex items-center justify-between px-6 py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => setIsNewsOpen(!isNewsOpen)}
          >
            <span className="text-sm text-gray-700 font-semibold">News</span>
            {isNewsOpen ? (
              <FaChevronUp className="text-gray-600 text-xs" />
            ) : (
              <FaChevronDown className="text-gray-600 text-xs" />
            )}
          </div>

          {isNewsOpen && (
            <div className="ml-4">
              <div className="bg-blue-500 text-white mt-2 py-2 px-4 rounded-lg cursor-pointer">
                News Create
              </div>
              <div className="text-gray-600 hover:bg-gray-200 mt-2 py-2 px-4 rounded-lg cursor-pointer">
                News List
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top nav */}
        <div className="flex justify-end items-center p-4 border-b bg-white">
          <div className="w-10 h-10 rounded-full overflow-hidden border">
            <img
              src="https://via.placeholder.com/40"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Form Section aligned to top-left */}
        <div className="flex-1 flex justify-start items-start p-6">
          <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-4xl flex gap-6">
            {/* Video upload preview */}
            <div className="w-1/3 space-y-2">
              <div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                {video ? (
                  <video
                    src={URL.createObjectURL(video)}
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src="https://wallpapers.com/images/hd/news-studio-background-dyhy6shg9vnyheww.jpg"
                    alt="News Studio"
                    className="object-cover w-full h-full"
                  />
                )}
              </div>

              {/* Custom Upload Button */}
              <label className="mt-2 inline-block cursor-pointer">
                <span className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded">
                  Upload
                </span>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => setVideo(e.target.files[0])}
                  className="hidden"
                />
              </label>
            </div>

            {/* Form Inputs */}
            <div className="flex-1 space-y-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border p-2 rounded"
                />
              </div>

              {/* Profile Section */}
              <div className="space-y-2">
                <h2 className="text-sm font-medium text-gray-700">Profile</h2>

                <div className="flex items-start gap-4">
                  {/* Normal Profile Image */}
                  <div className="w-10 h-10 rounded overflow-hidden border mt-2">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name and DOB stacked */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2 border px-3 py-2 rounded">
                      <FaCamera className="text-gray-600" />
                      <input
                        type="text"
                        placeholder="Name"
                        value={profileName}
                        onChange={(e) => setProfileName(e.target.value)}
                        className="outline-none w-full"
                      />
                    </div>

                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="border p-2 rounded w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
