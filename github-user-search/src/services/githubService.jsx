import axios from 'axios';

const API_URL = 'https://api.github.com/search/users';
const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

const searchUsers = async (query) => {
  const response = await axios.get(API_URL, {
    params: {
      q: query,
    },
    headers: {
      Authorization: `token ${API_KEY}`,
    },
  });
  return response.data.items;
};


