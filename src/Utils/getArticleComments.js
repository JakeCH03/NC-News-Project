import axios from "axios";

const getArticleComments = ({ id }) => {
  return axios
    .get(
      `https://news-portfolio-project.onrender.com/api/articles/${id}/comments`
    )
    .then((res) => res);
};

export default getArticleComments;
