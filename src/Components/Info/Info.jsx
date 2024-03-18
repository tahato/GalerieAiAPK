import "./Info.css";
import success from "../../assets/Frame.png";
import insta from "../../assets/Instagram.png";
import twit from "../../assets/Twitter.png";
import disc from "../../assets/Discord.png";
import dribb from "../../assets/Dribbble.png";
import linkedin from "../../assets/LinkedIn.png";

const Info = () => {
  return (
    <div className="info_Create">
      <div className="contain">
        <img src={success} alt="" />
        <h2>This is a success callout!</h2>
        <p>Congrats! You have built the most amazing art in the world!</p>
        <button className="btn">Download</button>
        <button className="btn">Create poste</button>
      </div>
      <div className="icones">
        <img src={insta} alt="" />
        <img src={twit} alt="" />
        <img src={disc} alt="" />
        <img src={dribb} alt="" />
        <img src={linkedin} alt="" />
      </div>
    </div>
  );
};

export default Info;
