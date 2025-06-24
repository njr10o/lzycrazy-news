import React, { useState, useContext } from 'react';
import { FaChevronUp, FaChevronDown, FaCamera } from 'react-icons/fa';
import { NewsContext } from './NewsContext';
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

export default function NewsCreate() {
  const { addNews } = useContext(NewsContext);
  const [isNewsOpen, setIsNewsOpen] = useState(true);
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState('');
  const [profileName, setProfileName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if (!video || !title || !profileName || !date) {
      toast.error('Please fill all fields!');
      return;
    }

    addNews({ title, video, profileName, date });
    setTitle('');
    setVideo(null);
    setProfileName('');
    setDate('');
    toast.success('News created!');
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Toaster />
      {/* Sidebar */}
      <div className="w-60 bg-white border-r">
        <div className="p-6 font-bold text-blue-600 text-xl">LzyCrazy</div>

        <div className="mt-4 space-y-2">
          <h2 className="text-sm text-gray-500 font-semibold px-6 uppercase tracking-wide">
            Dashboard
          </h2>

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
            <div className="ml-4 space-y-2">
              <div className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                News Create
              </div>
              <Link
                to="/news-list"
                className="text-gray-600 hover:bg-gray-200 py-2 px-4 rounded-lg block"
              >
                News List
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex flex-col p-6">
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-4xl flex flex-col md:flex-row gap-6">
          {/* Video */}
          <div className="w-full md:w-1/3 space-y-2">
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
                  alt="News"
                  className="object-cover w-full h-full"
                />
              )}
            </div>
            <label className="mt-2 inline-block cursor-pointer">
              <span className="bg-blue-500 text-white px-4 py-2 rounded">
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

          {/* Inputs */}
          <div className="flex-1 space-y-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-2 rounded"
            />

            <div className="space-y-2">
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

            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
}
