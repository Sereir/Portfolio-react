import React from 'react';
import { useParams } from 'react-router-dom';
import articlesData from '../../data/blog.json'; // Assuming you have the correct path to your JSON data

const ArticleDetailPage = () => {
  const { slug } = useParams();

  // Find the article that matches the slug from the URL params
  const article = articlesData.data.find((article) => article.slug === slug);

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div className="article-container-slug">
     <img className="article-image-slug" src={require('../../images/' + article.blogImage)} alt={article.blogTitle} />
      <div className="article-content-slug">
        <h2>{article.blogTitle}</h2>
       <p> <i>Posted on {article.postedOn} by {article.author}</i></p>
        <p>{article.blogText}</p>
      </div>
    </div>
   
  );
};

export default ArticleDetailPage;
