import React, { useState, useEffect } from "react";
import { FaClock, FaComments, FaShare } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./styles/blog.css";
import { blogImages } from "../config/blogImages";

interface Blog {
  id: number;
  title: string;
  body: string;
  imageUrl: string;
}

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) =>
        setBlogs(
          data.map((blog: Blog, index: number) => ({
            ...blog,
            imageUrl: blogImages[index],
          }))
        )
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        {blogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id} className="blog-link">
            <div className="blog-container">
              <div className="blog-image">
                <img src={blog.imageUrl} alt="Sample" />
              </div>
              <div className="blog-content">
                <h1>{blog.title}</h1>
                <p>{blog.body}</p>
              </div>
              <div className="blog-meta">
                <span className="time-posted">
                  <FaClock size={16} />
                </span>
                <span className="comment-icon">
                  <FaComments size={16} /> 10
                </span>
                <span className="share-icon">
                  <FaShare size={16} /> Share
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
