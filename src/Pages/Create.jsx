import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import home from "../assets/Vector.png";
import star from "../assets/star.png";
import back from "../assets/back.png";
import forward from "../assets/Arrow.png";
import illustration from "../assets/illustration.png";
import icone from "../assets/icone.png";

import "./Create.css";
import Properties from "../Components/Properties/Properties";
import Info from "../Components/Info/Info";
import { useSelector } from "react-redux";

const Create = () => {
  const [tog, setTog] = useState(true);
  const toinfo = () => {
    setTog(true);
  };
  const toProp = () => {
    setTog(false);
  };
  const file = useSelector((state) => state.files.files);

  return (
    <div className="ContainerCreate">
      <header className="headCreate">
        <div>
          <img src={back} alt="back" />
          <img src={forward} alt="forward" />
        </div>
        <NavLink to={"/"} className="lien">
          <img src={home} alt="home" />
          Home
          <img src={forward} alt="forward" />
        </NavLink>
        <NavLink to={"/Create"} className="lien">
          <img src={star} alt="star" />
          Create
        </NavLink>
      </header>
      <div className="MainCreate">
        <div className="leftCreate">
          <img src={file?file: illustration} style={{width:"70%", height:"80%"}} alt="" />
        </div>
        <div className="rightCreate">
          <div className="bar">
            <div className="btns">
              <button
                onClick={toinfo}
                style={{
                  backgroundColor: tog && "#f3f4f6",
                  color: tog && "black",
                }}
              >
                Properties
              </button>
              <button
                onClick={toProp}
                style={{
                  backgroundColor: tog === false && "#f3f4f6",
                  color: tog === false && "black",
                }}
              >
                Info
              </button>
            </div>
            <img src={icone} alt="" />
          </div>
          {tog ? <Properties /> : <Info />}
        </div>
      </div>
    </div>
  );
};

export default Create;
