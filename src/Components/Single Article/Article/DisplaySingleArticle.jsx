import { useParams } from "react-router-dom";
import SingleArticleCard from "./SingleArticleCard";
import GetComments from "../Comments/GetComments";
import "./DisplaySingleArticle.css"

const DisplaySingleArticle = () => {
  const id = useParams();

  return (
    <section className="content-wrapper">
      <SingleArticleCard id={id.article_id} />
      <h2 className="wrapper">Comments:</h2>
      <GetComments id={id.article_id} className="comment-list" />
    </section>
  );
};

export default DisplaySingleArticle;
