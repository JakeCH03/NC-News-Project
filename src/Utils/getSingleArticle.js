import axios from "axios";

const getSingleArticle = (id) => {
  return axios
    .get(`https://news-portfolio-project.onrender.com/api/articles/${id}`)
    .then((res) => res);
};

export default getSingleArticle;
