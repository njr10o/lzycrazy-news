import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsCreate from './NewsCreate';
import NewsList from './NewsList';
import { NewsProvider } from './NewsContext';

export default function App() {
  return (
    <NewsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsCreate />} />
          <Route path="/news-list" element={<NewsList />} />
        </Routes>
      </BrowserRouter>
    </NewsProvider>
  );
}
