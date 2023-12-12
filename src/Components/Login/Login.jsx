import { getAllUsers } from "../../Utils/getAllUsers";
import { UserContext } from "../Context/UserContext";
import { useContext, useEffect, useState } from "react";
import UserCard from "./UserCard";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let userContext = useContext(UserContext);

  useEffect(() => {
    getAllUsers().then((res) => setUserList(res.data.users));
  }, []);

  if (userList.length) {
    return (
      <div className="users-container">
        <ul className="user-list">
          {userList.map((user) => {
            return (
              <li
                key={user.username}
                onClick={() => {
                  userContext.setUser(user.username);
                  console.log(userContext.user);
                }}
              >
                <Link to={"/home"} className="link">
                  <UserCard user={user} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Login;
