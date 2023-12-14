import { useContext, useEffect, useState } from "react";
import { getTopics } from "../../Utils/getTopics";
import "./DisplayTopics.css";
import { Link } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import { QuerieContext } from "../Context/QueriesContext";

const DisplayTopics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { setQuery } = useContext(QuerieContext);

  useEffect(() => {
    setIsLoading(true);
    getTopics().then((res) => {
      setIsLoading(false);
      setTopics(res.data.topics);
    });
  }, []);
  if (isLoading) {
    return <ClimbingBoxLoader className="spinner" />;
  }
  return (
    <ul className="topics-list">
      {topics.map((topic) => {
        return (
          <Link
            className="link"
            to={`/articles`}
            key={topic.slug}
            onClick={() => {setQuery(topic.slug)}}
          >
            <li className="topic-item">
              <h3>{topic.slug[0].toUpperCase() + topic.slug.slice(1)}</h3>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default DisplayTopics;
