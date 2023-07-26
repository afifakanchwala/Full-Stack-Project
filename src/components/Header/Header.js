import React, { useEffect, useState } from "react"; //upar vala pura part dummy image,title,genres header he
import "./header.css";
import { MdPlayCircle } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const [showInfo, setShowInfo] = useState("true");
  const handleInfoClick = () => {
    setShowInfo((prevShowInfo) => !prevShowInfo);
  };

  return (
    <div className="header">
      <img
        src="https://liveindia.tv/wp-content/uploads/2023/05/AvatarThe-Way-Of-Water-768x576-1.jpg"
        alt=""
      />

      <div className="info">
        <div className="buttons">
          <button className="play" onClick={() => navigate("/watch")}>
            <MdPlayCircle className="md" />
            <span>Play</span>
          </button>
          <button className="more">
            <MdInfoOutline className="md" onClick={handleInfoClick} />
            <span>Info</span>
          </button>
        </div>
        <div className="movie-info">
          {showInfo && (
            <span className="info-text">
              This is the story of the Sully family and what one does to keep
              their family together. Jake and Neytiri have a family in this
              movie, they are forced to leave their home, they go out and
              explore the different regions of Pandora, including spending quite
              a bit of time on the water, around the water, in the water.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
{
  /* </>
      )} */
}
