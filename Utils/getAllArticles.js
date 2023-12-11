import axios from "axios";

const getAllArticles = () => {
  return axios
    .get("https://news-portfolio-project.onrender.com/api/articles")
    .then((res) => res);
};

export default getAllArticles;
