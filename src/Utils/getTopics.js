import axios from "axios"

export const getTopics = () => {
    return axios.get("https://news-portfolio-project.onrender.com/api/topics").then((res) => res)
}
