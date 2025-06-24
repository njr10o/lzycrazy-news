import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [newsList, setNewsList] = useState([]);

  const addNews = (news) => setNewsList((prev) => [...prev, news]);
  const deleteNews = (index) => {
    const updated = [...newsList];
    updated.splice(index, 1);
    setNewsList(updated);
  };
  const renameNews = (index, newTitle) => {
    const updated = [...newsList];
    updated[index].title = newTitle;
    setNewsList(updated);
  };

  return (
    <NewsContext.Provider value={{ newsList, addNews, deleteNews, renameNews }}>
      {children}
    </NewsContext.Provider>
  );
};
