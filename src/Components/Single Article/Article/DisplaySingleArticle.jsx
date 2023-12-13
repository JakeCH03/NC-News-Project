import { useParams } from "react-router-dom";
import SingleArticleCard from "./SingleArticleCard";
import GetComments from "../Comments/GetComments";
import "./DisplaySingleArticle.css";
import AddComment from "../Comments/AddComment";
import { useState } from "react";

const DisplaySingleArticle = () => {
  const [comments, setComments] = useState([]);
  const id = useParams();

  return (
    <section className="content-wrapper">
      <SingleArticleCard id={id.article_id} />
      <h2 className="wrapper">Comments:</h2>
      <AddComment
        id={id.article_id}
        setComments={setComments}
        comments={comments}
      />
      <GetComments
        id={id.article_id}
        comments={comments}
        setComments={setComments}
        className="comment-list"
      />
    </section>
  );
};

export default DisplaySingleArticle;
