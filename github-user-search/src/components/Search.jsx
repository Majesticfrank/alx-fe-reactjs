import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] =useState("")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const {name, value}=e.target;
    if(name === 'username'){
      setUsername(value);
    }else if(name ==='location'){
      setLocation(value);
    }else if(name ==='minRepos'){
      setMinRepos(value);
    }

    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
      setUsername('');
      setMinRepos('');
      setLocation('');
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
      {error && <p className="text-red-600">Looks like we can't find the user.</p>}

      {userData && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">{userData.name}</h3>
          <img src={userData.avatar_url} alt={`${ userData.name} avatar`} width={100} className="rounded-full mt-2" />
          <p className="mt-2">{userData.bio}</p>
          <p className="text-sm text-gray-600">Location: {userData.location || 'N/A'}</p>
          <p className="text-sm text-gray-600">Repositories: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-2 block">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;

