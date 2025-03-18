import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const RedditFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://www.reddit.com/r/reactjs.json")
        .then((response) => {
          setPosts(response.data.data.children);
          setLoading(false);
        })
        .catch((error) => {
          setError("Failed to fetch data");
          setLoading(false);
        });
    }, 3000); // 4-second delay for loading effect
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="container">
      <h1 className="title">Reddit ReactJS Posts</h1>
      <div className="grid">
        {posts.map((post) => (
          <div key={post.data.id} className="card">
            <h2 className="post-title">{post.data.title}</h2>
            {post.data.selftext_html && (
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.data.selftext_html }}
              ></div>
            )}
            <a
              href={post.data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="post-button"
            >
              Read More
            </a>
            <p className="post-score">Score: {post.data.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RedditFeed;
