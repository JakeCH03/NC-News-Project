import deleteComment from "../../../Utils/deleteComment";
import getArticleComments from "../../../Utils/getArticleComments";

const DeleteHandler = ({ article_id, comment_id, setComments }) => {
  const onClickHandler = () => {
    setComments((curr) => {
      return curr.filter((comment) => {
        return comment.comment_id != comment_id;
      });
    });

    deleteComment(comment_id).catch(() => {
      alert("That didn't quite work. Please try again!");
      getArticleComments(article_id).then((res) => {
        setComments(res.data.comments);
      });
    });
  };

  return <button onClick={onClickHandler}> delete </button>;
};

export default DeleteHandler;
