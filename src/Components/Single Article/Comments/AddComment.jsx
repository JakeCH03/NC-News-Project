import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { postComment } from "../../../Utils/postComment";

const AddComment = ({ id, setComments }) => {
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
        comment_id: curr.length + 1,
        created_at: new Date().toString(),
        votes: 0,
      },

      ...curr,
    ]);

    postComment({ username: userContext.user, comment: commentData }, id).catch(
      () => {
        alert("That didn't quite work! Please try again");
        setCommentData((curr) => curr.shift());
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
