import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to={"/home"}>
        <button>Back To Home</button>
      </Link>
    </header>
  );
};

export default Header;
