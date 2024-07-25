import wooviLogo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{margin: "2rem 0"}}>
      <Link to="">
        <img
          src={wooviLogo}
          alt="Woovi Logo"
          style={{
            width: "9rem",
            height: "auto",
            margin: "0 auto", 
            display: "block"
          }}
        />
      </Link>
    </header>
  );
};

export default Header;
