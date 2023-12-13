import { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { postComment } from "../../../Utils/postComment";

const AddComment = ({ id, setComments, comments }) => {
  const [commentData, setCommentData] = useState("");

  const userContext = useContext(UserContext);

  const onChangeHandler = (event) => {
    setCommentData(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setComments((curr) => [
      {
        article_id: id,
        author: userContext.user,
        body: commentData,
        comment_id: "123987",
        created_at: new Date().toString(),
        votes: 0,
      },

      ...curr,
    ]);

    postComment({ username: userContext.user, comment: commentData }, id).catch(
      () => {
        alert("That didn't quite work! Please try again");
        setComments((curr) => {
          return curr.filter((comment) => {
            return comment.comment_id != "123987";
          });
        });
      }
    );
  };

  return (
    <form
      onSubmit={(event) => {
        onSubmitHandler(event);
      }}
    >
      <input
        type="text"
        className="comment-box"
        placeholder="Add a comment..."
        required
        onChange={onChangeHandler}
      />
      <button type="submit">Comment</button>
    </form>
  );
};

export default AddComment;
