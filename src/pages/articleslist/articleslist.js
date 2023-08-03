// Import des styles
import React from 'react';
import articlesData from '../../data/blog.json';
import { Link } from 'react-router-dom';

const ArticlesList = () => {
  return (
    <div className="articles-container">
      {articlesData.data.map((article) => (
        <Link to={`/articles/${article.slug}`} key={article.id} className="article-card">
          <img className="article-image" src={require('../../images/' + article.blogImage)} alt={article.blogTitle} />
          <div className="article-info">
            <h2 className="article-title">{article.blogTitle}</h2>
            <p className="article-content">{article.blogText.slice(0, 150)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticlesList;
