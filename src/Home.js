import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPendeing] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((response) => {
          if (!response.ok) {
            throw Error("Could not fetch the data from the JSON server...");
          }
          return response.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPendeing(false);
          setError(null);
        })
        .catch((err) => {
          setIsPendeing(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div className="error-message">{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
