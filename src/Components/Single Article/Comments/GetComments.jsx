import { useContext, useEffect, useState } from "react";
import getArticleComments from "../../../Utils/getArticleComments";
import { ClimbingBoxLoader } from "react-spinners";
import "./GetComments.css";
import { UserContext } from "../../Context/UserContext";
import DeleteHandler from "./DeleteComment";

const GetComments = ({
  comments,
  setComments,
  id,
  deletedComment,
  setDeletedComment,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const userContext = useContext(UserContext);

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
            <h3 className="author-name">{comment.author}:</h3>
            <p className="comment-data">{comment.body}</p>
            {userContext.user === comment.author && (
              <DeleteHandler
                id={comment.comment_id}
                setComments={setComments}
                deletedComment={deletedComment}
                setDeletedComment={setDeletedComment}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default GetComments;
