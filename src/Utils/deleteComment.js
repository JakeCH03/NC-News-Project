import axios from "axios";

const deleteComment = (id) => {
  return axios.delete(
    `https://news-portfolio-project.onrender.com/api/comment/${id}`
  );
};

export default deleteComment;