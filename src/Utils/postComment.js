import axios from "axios";

export const postComment = (data, id) => {
  console.log(data);
  return axios
    .post(
      `https://news-portfolio-project.onrender.com/api/articles/${id}/comments`,
      data
    )
    .then((res) => {
      console.log(res);
    });
};
