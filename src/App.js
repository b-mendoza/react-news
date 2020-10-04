import React from 'react';
import Form from './components/Form';

import NewsContextProvider from './context/NewsContext';
import { fetchData } from './helpers/fetchData';
import Header from './components/Header';
import NewsList from './components/NewsList';

const App = () => {
    fetchData('general');

    return (
        <NewsContextProvider>
            <Header title="News Finder" />

            <div className="container">
                <Form />

                <hr />

                <NewsList />
            </div>
        </NewsContextProvider>
    );
};

export default App;
