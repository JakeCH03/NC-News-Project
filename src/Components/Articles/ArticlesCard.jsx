import "./ArticleCard.css";

const ArticleCard = ({ data }) => {
  let dateString = data.created_at.toString();

  let inputDate = new Date(dateString);

  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const outputDate = inputDate.toLocaleDateString("en-UK", options);

  return (
    <section className="article-element">
      <div>u/{data.author}</div>
      <div className="title">{data.title}</div>
      <div>comments: {data.comment_count}</div>
      <div>{outputDate}</div>
    </section>
  );
};

export default ArticleCard;
