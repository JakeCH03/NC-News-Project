import axios from "axios";

export const upVote = (id) => {
  return axios
    .patch(`https://news-portfolio-project.onrender.com/api/articles/${id}`, {
      inc_votes: 1,
    })
    .then((res) => res);
};

export const downVote = (id) => {
  return axios
    .patch(`https://news-portfolio-project.onrender.com/api/articles/${id}`, {
      inc_votes: -1,
    })
    .then((res) => res);
};
