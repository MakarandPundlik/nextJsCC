import React from "react";
import articleStyles from "../styles/Article.module.css";
export const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => {
        return <h3 key={article.id}>{article.title}</h3>;
      })}
    </div>
  );
};
