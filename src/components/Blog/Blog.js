import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { HiArrowRight } from "react-icons/hi";

import "./Blog.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import SingleBlog from "./SingleBlog/SingleBlog";

function Blog() {
  const { theme } = useContext(ThemeContext);

  // State to hold the fetched articles
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch articles from the Dev.to API
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=birajgtm"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        console.log("Fetched articles:", data); // Log the fetched data
        setArticles(data);
      } catch (err) {
        console.error("Error fetching articles:", err); // Log any errors
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: "40px",
      height: "40px",
      padding: "0.5rem",
      fontSize: "1.05rem",
      borderRadius: "50%",
      cursor: "pointer",
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {articles.length > 0 && (
        <div
          className="blog"
          id="blog"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="blog--header">
            <h1 style={{ color: theme.primary }}>Blog</h1>
          </div>
          <div className="blog--body">
            <div className="blog--bodyContainer">
              {articles
                .slice(0, 3)
                .reverse()
                .map((article) => (
                  <SingleBlog
                    theme={theme}
                    title={article.title}
                    desc={
                      article.description || article.body.slice(0, 100) + "..."
                    }
                    // date={article.published_at}
                    image={article.cover_image || "default_image.jpg"}
                    url={article.url}
                    key={article.id}
                    id={article.id}
                  />
                ))}
            </div>

            {articles.length > 3 && (
              <div className="blog--viewAll">
                <Link to="/blog">
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Blog;
