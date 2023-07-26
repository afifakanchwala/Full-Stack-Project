import React from "react";
import "./play.css";
import { BiArrowBack } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Play = () => {
  const navigate = useNavigate();

  //const location = useLocation();
  //const movie = location.movie;
  return (
    <div className="watch">
      <div className="back-btn">
        <BiArrowBack onClick={() => navigate(-1)} />
        Home
      </div>

      <video
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        alt=""
        className="video"
        autoPlay
        progress
        controls
      />
    </div>
  );
};

export default Play;
