import React from 'react';
import { useQuery } from 'react-query'; // Import useQuery from react-query

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return response.json();
};

const PostsComponent = () => {
  // useQuery hook to fetch posts data
  const { data, error, isLoading, isError } = useQuery('posts', fetchPosts, {
    staleTime: 60000, // Cache data for 60 seconds
    cacheTime: 300000, // Keep cache data for 5 minutes
  });

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