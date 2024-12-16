import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState([]);
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'location') setLocation(value);
    if (name === 'minRepos') setMinRepos(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData([]);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
            placeholder="Enter GitHub username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleInputChange}
            placeholder="Location (optional)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
          <input
            type="number"
            name="minRepos"
            value={minRepos}
            onChange={handleInputChange}
            placeholder="Min. repositories"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">An error occurred while fetching users. Please try again.</p>}

      {userData.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Found {userData.length} users</h3>
          <ul className="space-y-4 mt-4">
            {userData.map((user) => (
              <li key={user.id} className="border p-4 rounded-lg">
                <h4 className="text-lg font-bold">{user.login}</h4>
                <img src={user.avatar_url} alt={`${user.login} avatar`} width={50} className="rounded-full mt-2" />
                <p className="text-sm text-gray-600">GitHub URL: <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{user.html_url}</a></p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;



