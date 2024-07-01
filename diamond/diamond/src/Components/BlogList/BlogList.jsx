// src/Components/BlogList/BlogList.jsx
import React from 'react';
import './BlogList.css';

const blogs = [
  { id: 1, title: 'Piece of Crystal', date: 'Jan 2023', author: 'Author 1', description: 'Description 1', image: 'path/to/image1.jpg' },
  { id: 2, title: 'Fancy Gemstones', date: 'Feb 2023', author: 'Author 2', description: 'Description 2', image: 'path/to/image2.jpg' },
  { id: 3, title: 'Jewel Gear', date: 'Mar 2023', author: 'Author 3', description: 'Description 3', image: 'path/to/image3.jpg' },
  { id: 4, title: 'Homemade Gems', date: 'Apr 2023', author: 'Author 4', description: 'Description 4', image: 'path/to/image4.jpg' }
];

const BlogList = () => {
  return (
    <div className="blog-list-section">
      <h2>From our blog</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.date} by {blog.author}</p>
            <p>{blog.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
