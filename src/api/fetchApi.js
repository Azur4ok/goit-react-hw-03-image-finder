const KEY = process.env.REACT_APP_API_KEY;
const FILTER_QUERY = process.env.REACT_APP_API_FILTER_QUERY;
const URL = process.env.REACT_APP_API_URL;

export const fetchData = async(query, page = 1) => {
    const response = await fetch(`${URL}?q=${query}&page=${page}&key=${KEY}${FILTER_QUERY}`);
    return await response.json();
};