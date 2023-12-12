import { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import getSingleArticle from "../../../Utils/getSingleArticle";
import "./SingleArticleCard.css";
import { Link } from "react-router-dom";
import DisplayVotes from "./DisplayVotes";

const SingleArticleCard = ({ id }) => {
  const [articleData, setArticleData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(id).then((res) => {
      setArticleData(res.data.article);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <ClimbingBoxLoader className="spinner" />;
  }
  return (
    <section className="article">
      <div className="heading">
        <div className="date">
          {Date(articleData.created_at).match(
            /\b\w{3} \w{3} \d{1,2} \d{4} \d{2}:\d{2}:\d{2}\b/
          )}
        </div>
        <Link className="author">u/{articleData.author}</Link>
      </div>
      <h1 className="title">{articleData.title}</h1>
      <img src={articleData.article_img_url} className="image" />
      <div className="body">{articleData.body}</div>
      <DisplayVotes votes={articleData.votes} id={articleData.article_id} />
    </section>
  );
};

export default SingleArticleCard;
