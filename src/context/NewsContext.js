import React, { createContext, useReducer } from 'react';

import { newsReducer } from '../reducer/newsReducer';

export const NewsContext = createContext();

const init = () => ({});

const NewsContextProvider = ({ children }) => {
    const [newsData, dispatch] = useReducer(newsReducer, {}, init);

    return (
        <NewsContext.Provider value={{ newsData, dispatch }}>
            {children}
        </NewsContext.Provider>
    );
};

export default NewsContextProvider;
