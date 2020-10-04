export const fetchData = async (category = 'general') => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL =
        `https://newsapi.org/v2/top-headlines?country=us` +
        `&category=${category}&apiKey=${API_KEY}`;

    const response = await fetch(URL);

    const body = await response.json();
    const { articles } = body;

    return articles;
};
