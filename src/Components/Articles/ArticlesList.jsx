import { useState, useEffect } from "react";
import getAllArticles from "../../Utils/getAllArticles";
import "./ArticlesList.css";
import ArticleCard from "./ArticlesCard";
import { Link } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import DisplayTopics from "../Topics/DisplayTopics";

const ArticlesList = () => {
  const [articleItems, setArticleItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles()
      .then((res) => {
        setArticleItems(res.data.articles);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <ClimbingBoxLoader className="spinner" />;
  } else {
    return (
      <>
        <DisplayTopics />
        <section className="articles">
          {articleItems.map((article) => {
            return (
              <Link
                className="link"
                key={article.article_id}
                to={`/article/${article.article_id}`}
              >
                <ArticleCard data={article} />
              </Link>
            );
          })}
        </section>
      </>
    );
  }
};

export default ArticlesList;
