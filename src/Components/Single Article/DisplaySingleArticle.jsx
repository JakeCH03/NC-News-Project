import { useParams } from "react-router-dom";
import SingleArticleCard from "./SingleArticleCard";

const DisplaySingleArticle = () => {
  const id = useParams();

  return <SingleArticleCard id={id.article_id} />;
};

export default DisplaySingleArticle;
