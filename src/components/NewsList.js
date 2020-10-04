import React, { useContext } from 'react';

import { NewsContext } from '../context/NewsContext';
import { useData } from '../hooks/useData';

import News from './News';

const NewsList = () => {
    const { newsData } = useContext(NewsContext);
    const { category } = newsData;

    const data = useData(category);

    return (
        <div className="row">
            {data.map(news => (
                <News key={news.url} {...news} />
            ))}
        </div>
    );
};

export default NewsList;
