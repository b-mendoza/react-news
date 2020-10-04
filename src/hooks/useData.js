import { useEffect, useState } from 'react';
import { fetchData } from '../helpers/fetchData';

export const useData = category => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(category).then(setData);
    }, [category]);

    return data;
};
