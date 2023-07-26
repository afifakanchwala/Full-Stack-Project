import "./items.css"; //section ke ek part video ka including its trailer,time ,date,
import React, { useState } from "react"; // age limit items he.
import { BsCheck, BsPlayFill } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { BiChevronDown, BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removedMovie } from "../../redux/store";
import { base_url } from "../../utils/constants";

function Items({ index, moviesData, isLiked = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // usestate for hover effect
  const [hover, setHover] = useState(false);
  const [email, setEmail] = useState(undefined);
  const movieData = moviesData;
  console.log(movieData);

  //   onAuthStateChanged((currentUser)=>{
  // if(currentUser){
  //   setEmail(currentUser.email);
  // } else navigate("/login");
  //   });

  const addToList = async () => {
    try {
      await axios.post(`${base_url}/api/user/add`, {
        data: movieData,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // const trailer =
  //   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <Link to={{ pathname: "/watch", state: { movie: movieData } }}>
      <div
        className="items"
        style={{ left: hover && index * 225 - 12.5 + index * 2.5 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          className="img"
          src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
          alt="movie"
        />

        {/* if its hover then show the video */}
        {hover && (
          <>
            <div className="hover">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
                alt="card"
                onClick={() => navigate("/watch")}
              />
              {/* <video src={trailer} autoPlay={true} loop /> */}

              <video
                src={
                  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                }
                autoPlay={true}
                loop
                muted
                onClick={() => navigate("/watch")}
              />
            </div>

            <div className="itemInfo">
              <h3 className="name" onClick={() => navigate("/watch")}>
                {movieData.name}
              </h3>
              <div className="icon">
                <BsPlayFill
                  className="btn"
                  title="Play"
                  onClick={() => navigate("/watch")}
                />
                <BiLike className="btn" title="like" />
                <BiDislike className="btn" title="dislike" />
                {isLiked ? (
                  <BsCheck
                    className="btn"
                    title="Remove from list"
                    onClick={() =>
                      dispatch(removedMovie({ movieId: moviesData.id, email }))
                    }
                  />
                ) : (
                  <IoMdAdd
                    className="btn"
                    title="Add to my list"
                    onClick={addToList}
                  />
                )}
                <BiChevronDown className="btn" title="More Info" />
              </div>
              <div className="genre">
                <ul>
                  {movieData.genres.map((genre, genreIndex) => (
                    <li key={genreIndex}>{genre}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default Items;
