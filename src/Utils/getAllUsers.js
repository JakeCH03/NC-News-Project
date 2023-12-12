import axios from "axios";

export const getAllUsers = () => {
  return axios
    .get("https://news-portfolio-project.onrender.com/api/users")
    .then((res) => res);
};
