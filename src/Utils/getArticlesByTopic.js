import axios from "axios";

export const getArticlesByTopic = (topic) => {
  return axios
    .get(
      `https://news-portfolio-project.onrender.com/api/articles?topic=${topic}`
    )
    .then((res) => res);
};
