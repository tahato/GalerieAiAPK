import NavBar from "../Components/NavBar";
import "./Home.css";
import note from "../assets/En.png";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="HomeContainer">
        <header className="head">
          <div>
            {" "}
            <img src="" alt="profileIcon" />
          </div>
          <div className="info">
            <h3>Name</h3>
            <p>description </p>
          </div>
          <div className="noteIcone">
            <img src={note} alt="" />
            <div className="notif"></div>
          </div>
        </header>
        <div className="buttons">
          <button>Discovery</button>
          <button>Abstract</button>
          <button>Sci-fi</button>
          <button> + </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
