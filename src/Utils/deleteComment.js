import axios from "axios";

const deleteComment = (id) => {
  return axios.delete(
    `https://news-portfolio-project.onrender.com/api/comments/${id}`
  );
};

export default deleteComment;