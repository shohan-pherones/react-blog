import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] =useState([
    {title: 'JavaScript Coding Championship 2022', body: 'lorem ipsum...', author: 'Coder Boy Kader', id: 1},
    {title: 'Lipsticks Price Increasing - June Beauty Tips', body: 'lorem ipsum...', author: 'Hot Queen Ayesha', id: 2},
    {title: 'Girlfriend Experience in Sajek Valley', body: 'lorem ipsum...', author: 'Travel King Motin', id: 3}
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by <span>{blog.author}</span></p>
        </div>
      ))}
    </div>
  );
};

export default Home;
