import deleteComment from "../../../Utils/deleteComment";

const DeleteHandler = ({
  id,
  setComments,
  deletedComment,
  setDeletedComment,
}) => {
  const onClickHandler = () => {
    setComments((curr) => {
    //   console.log(curr);
      return curr.filter((comment, index) => {
        if (comment.comment_id === id) {
          setDeletedComment({ ...comment });
        }
        return comment.comment_id != id;
      });
    });
    deleteComment(id).catch(() => {
      alert("That didn't quite work. Please try again!");
      setComments((curr) => {
        if (Object.keys(deletedComment).length) {
          console.log(deletedComment);
          return [deletedComment, ...curr];
        } else {
          return [
            { body: "sorry, we lost your comment. Try refreshing" },
            ...curr,
          ];
        }
      });
    });
  };

  return <button onClick={onClickHandler}> delete </button>;
};

export default DeleteHandler;
