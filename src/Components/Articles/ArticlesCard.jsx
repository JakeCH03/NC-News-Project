import "./ArticleCard.css";

const ArticleCard = ({ data }) => {
  const regex = /\b\w{3} \w{3} \d{1,2} \d{4} \d{2}:\d{2}:\d{2}\b/;

  let formattedDate = Date(data.created_at).match(regex);

  return (
    <section className="article-element">
      <div>u/{data.author}</div>
      <div className="title">{data.title}</div>
      <div>comments: {data.comment_count}</div>
      <div>{formattedDate}</div>
    </section>
  );
};

export default ArticleCard;
