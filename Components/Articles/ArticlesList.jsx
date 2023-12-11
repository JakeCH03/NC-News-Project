import { useState, useEffect } from "react";
import getAllArticles from "../../Utils/getAllArticles";
import "./ArticlesList.css";
import ArticleCard from "./ArticlesCard";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  const [articleItems, setArticleItems] = useState([]);

  useEffect(() => {
    getAllArticles().then((res) => {
      setArticleItems(res.data.articles);
    });
  });

  return (
    <section className="articles">
      {articleItems.map((article) => {
        return (
          <Link className="link">
            <ArticleCard data={article} key={article.article_id} />
          </Link>
        );
      })}
    </section>
  );
};

export default ArticlesList;
