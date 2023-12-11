import { useEffect, useState } from "react";
import getArticleComments from "../../../Utils/getArticleComments";
import { ClimbingBoxLoader } from "react-spinners";
import "./GetComments.css";

const GetComments = (id) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleComments(id).then((res) => {
      setComments(res.data.comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <ClimbingBoxLoader className="spinner" />;
  }
  return (
    <ul className="comments-lists">
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id} className="comment">
            {comment.body}
          </li>
        );
      })}
    </ul>
  );
};

export default GetComments;
