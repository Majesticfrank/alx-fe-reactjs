

import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  // Extract the "slug" from the URL parameters
  const { slug } = useParams();

  // Sample data for demonstration
  const blogData = {
    'react-basics': {
      title: 'React Basics',
      content: 'This is a blog post about the basics of React.',
    },
    'understanding-hooks': {
      title: 'Understanding Hooks',
      content: 'This post explains React hooks in detail.',
    },
    'advanced-react-patterns': {
      title: 'Advanced React Patterns',
      content: 'Learn about advanced patterns in React development.',
    },
  };

  // Get the specific blog post data based on the slug
  const blogPost = blogData[slug];

  // If no post is found, show a "not found" message
  if (!blogPost) {
    return <h2>Blog post not found!</h2>;
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '800px', margin: '20px auto' }}>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
    </div>
  );
};

export default BlogPost;
