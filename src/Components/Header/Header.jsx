import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  const userContext = useContext(UserContext);
  return (
    <header className="Header">
      <Link to={"/home"}>
        <button>Back To Home</button>
      </Link>
      {!userContext.user
        ? "You are not currently logged in"
        : `You are logged in as ${userContext.user}`}
      {!userContext.user ? (
        <Link to="/login">
          <button>Login</button>
        </Link>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
