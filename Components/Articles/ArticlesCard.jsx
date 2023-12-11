import "./ArticleCard.css"

const ArticleCard = ({ data }) => {
  return (
    <section className="article-element">
      <div>u/{data.author}</div>
      <div className="title">{data.title}</div>
      <div>comments: {data.comment_count}</div>
    </section>
  );
};

export default ArticleCard;
