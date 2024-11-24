import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts data
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return response.json();
};

const PostsComponent = () => {
  // useQuery hook to fetch posts data with caching, stale time, and keepPreviousData
  const { data, error, isLoading, isError, isFetching, refetch } = useQuery(
    ['posts'],
    fetchPosts,
    {
      staleTime: 60000, // Cache data for 60 seconds
      cacheTime: 300000, // Keep cache data for 5 minutes
      keepPreviousData: true, // Keep previous data while fetching new data
      refetchOnWindowFocus: false, // Prevent refetching when the window comes into focus
    }
  );

  // Loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      
      {/* Button to trigger refetch */}
      <button onClick={() => refetch()}>
        {isFetching ? 'Refetching...' : 'Refetch Data'}
      </button>

      {/* Display posts */}
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
