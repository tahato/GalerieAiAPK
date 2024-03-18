import logicon from "../assets/Logo.png";
import home from "../assets/Vector.png";
import collect from "../assets/File.png";
import down from "../assets/Filedown.png";
import hist from "../assets/History.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import star from "../assets/wstar.png";
const NavBar = () => {
  const navigte = useNavigate();

  return (
    <div className="nav">
      <div className="up">
        <img src={logicon} alt="" />
        <button className="btn" onClick={() => navigte("/Create")}>
          <img src={star} alt="" className="star" />
          Create
        </button>
        <div className="lien">
          {" "}
          <img src={home} alt="" />
          <NavLink to={"/"}>Home</NavLink>
        </div>
        <div className="lien">
          {" "}
          <img src={collect} alt="" />
          <NavLink to={"/"}>Collection</NavLink>
        </div>
        <div className="lien">
          {" "}
          <img src={down} alt="" />
          <NavLink to={"/"}>Download</NavLink>
        </div>
        <div className="lien">
          {" "}
          <img src={hist} alt="" />
          <NavLink to={"/"}>History</NavLink>
        </div>
      </div>
      <div className="down">
        <img src={hist} alt="" />
        <NavLink to={"/"}>History</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
