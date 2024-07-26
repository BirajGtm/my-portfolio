import React, { useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";

import './BlogPage.css';
import { SingleBlog } from '../../components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';

function BlogPage() {
    const [search, setSearch] = useState('');
    const { theme } = useContext(ThemeContext);
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

    const filteredArticles = articles.filter((article) => {
        const content = article.title + article.description + article.published_at;
        return content.toLowerCase().includes(search.toLowerCase());
    });

    const useStyles = makeStyles((t) => ({
        search: {
            color: theme.tertiary,
            width: '40%',
            height: '2.75rem',
            outline: 'none',
            border: 'none',
            borderRadius: '20px',
            padding: '0.95rem 1rem',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: '0.9rem',
            backgroundColor: theme.secondary,
            boxShadow: theme.type === 'dark' ? 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060' : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
            "&::placeholder": {
                color: theme.tertiary80,
            },
            [t.breakpoints.down('sm')]: {
                width: '350px',
            },
        },
        home: {
            color: theme.secondary,
            position: 'absolute',
            top: 25,
            left: 25,
            padding: '7px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            "&:hover": {
                color: theme.tertiary,
                transform: 'scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className="blogPage" style={{ backgroundColor: theme.secondary }}>
            <Helmet>
                <title>{headerData.name} | Blog</title>
            </Helmet>
            <div className="blogPage--header" style={{ backgroundColor: theme.primary }}>
                <Link to="/">
                    <AiOutlineHome className={classes.home} />
                </Link>
                <h1 style={{ color: theme.secondary }}>Blogs</h1>
            </div>
            <div className="blogPage--container">
                <div className="blog--search">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search blog..." className={classes.search} />
                </div>
                <div className="blogs--container">
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    <Grid className="blog-grid" container direction="row" alignItems="center" justifyContent="center">
                        {filteredArticles.reverse().map(article => (
                            <SingleBlog
                                theme={theme}
                                title={article.title}
                                desc={article.description || article.body.slice(0, 100) + "..."}
                                date={article.published_at}
                                image={article.cover_image || 'default_image.jpg'}
                                url={article.url}
                                key={article.id}
                                id={article.id}
                            />
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default BlogPage;
