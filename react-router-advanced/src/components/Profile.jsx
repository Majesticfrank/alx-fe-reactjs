import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Profile = () => {


    const blogs = [
        { id: 1, title: 'React Basics', slug: 'react-basics' },
        { id: 2, title: 'Understanding Hooks', slug: 'understanding-hooks' },
        { id: 3, title: 'Advanced React Patterns', slug: 'advanced-react-patterns' },
      ];
  return (
    <div>

        <h1>Profile Page</h1>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Profile Page</h1>

      <nav>
        
        <ul>
<li>  
    <Link to="/">Profile</Link> 
    
</li>
          <li>
            <Link to="/ProfileDetails">Profile Details</Link>
          </li>
          <li>
            <Link to="/ProfileSettings">Profile Settings</Link>
          </li>
        </ul>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>

    <div style={{ padding: '20px' }}>
      <h2>Blog Posts</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} style={{ margin: '10px 0' }}>
            {/* Link to the BlogPost component using dynamic URL */}
            <Link to={`/blog/${blog.slug}`} style={{ textDecoration: 'none', color: '#007bff' }}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  
    </div>
  );
};

export default Profile