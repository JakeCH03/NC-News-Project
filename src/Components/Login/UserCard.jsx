import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <section className="user">
      <img src={user.avatar_url} className="avatar"/>
      <h1>{user.username}</h1>
      <div>{user.name}</div>
    </section>
  );
};
export default UserCard;
