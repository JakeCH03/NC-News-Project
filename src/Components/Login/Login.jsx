import { getAllUsers } from "../../Utils/getAllUsers";
import { UserContext } from "../Context/UserContext";
import { useContext, useEffect, useState } from "react";
import UserCard from "./UserCard";
import "./Login.css";
import { Link } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

const Login = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let userContext = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    getAllUsers().then((res) => {
      setUserList(res.data.users);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <ClimbingBoxLoader className="spinner" />;
  }

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
};

export default Login;
