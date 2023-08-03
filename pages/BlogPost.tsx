import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogImages } from "../config/blogImages";
import "./styles/blogPost.css";
import Navbar from "../components/Navbar";
import ReactLoading from "react-loading";

interface Blog {
  id: number;
  title: string;
  body: string;
  imageUrl: string;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const foundBlog = data as Blog;
        foundBlog.imageUrl = blogImages[foundBlog.id - 1];
        setBlog(foundBlog);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!blog) {
    return (
      <div className="loader">
        <ReactLoading type="spokes" color="#0000FF" height={100} width={50} />
      </div>
    );
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment = `${name}: ${comment}`;
    setComments([...comments, newComment]);
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <section>
      <Navbar />
      <div className="container">
        <div className="imgContainer">
          <img src={blog.imageUrl} alt="Sample" />
        </div>
        <div className="blogContent">
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
          <p>Author: Jonah</p>
          <div className="commentSection">
            <h2>Comments</h2>
            {comments.length === 0 ? (
              <p>No comments yet</p>
            ) : (
              <ul>
                {comments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="leaveCommentSection">
          <h2>Leave a Comment</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="comment">Comment</label>
              <textarea
                id="comment"
                name="comment"
                rows={4}
                value={comment}
                onChange={handleCommentChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
