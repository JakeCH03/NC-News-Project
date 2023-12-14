import { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getArticlesByTopic } from "../../Utils/getArticlesByTopic";
import ArticleCard from "../Articles/ArticlesCard";
import DisplayTopics from "./DisplayTopics";
import { QuerieContext } from "../Context/QueriesContext";

const ArticleByTopic = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const { query } = useContext(QuerieContext);

  const topic = searchParams.get("topic");

  useEffect(() => {
    if (topic) {
      getArticlesByTopic(topic).then((res) => setArticles(res.data.articles));
    }
  }, [topic]);

  useEffect(() => {
    if (query) {
      const newParams = new URLSearchParams();
      newParams.set("topic", query);

      setSearchParams(newParams);
    }
  }, [query]);

  return (
    <>
      <DisplayTopics />
      <section className="articles">
        {articles.map((article) => {
          return (
            <Link
              className="link"
              to={`/article/${article.article_id}`}
              key={article.article_id}
            >
              <ArticleCard data={article} />
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default ArticleByTopic;
