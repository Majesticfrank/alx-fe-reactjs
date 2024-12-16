// import axios from 'axios';

// // GitHub API endpoint for user search
// const GITHUB_API_URL = 'https://api.github.com/users/';

// export const fetchUserData = async (username) => {
//   try {
//     const response = await axios.get(`${GITHUB_API_URL}${username}`);
//     return response.data;
//   } catch (error) {
//     throw new Error('User not found');
//   }
// };

import axios from 'axios';

export const fetchUserData = async (username, location = '', minRepos = '') => {
  try {
    let query = `q=${username}`;

    if (location) {
      query += `+location:${encodeURIComponent(location)}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`https://api.github.com/search/users?${query}`);
    return response.data.items; // Return all users
  } catch (err) {
    throw new Error('Error fetching GitHub data');
  }
};



