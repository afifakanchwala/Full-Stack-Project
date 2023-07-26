import React, { useEffect, useState } from "react";
import "./likedmovies.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLikedMovies } from "../../redux/store";
import Navbar from "../../components/navbar/Navbar";
import Items from "../../components/Items/Items";

const LikedMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector((state) => state.flixxit.movies);

  const [scroll, setScroll] = useState(false);
  const [email, setEmail] = useState(undefined);

  useEffect(() => {
    if (email) {
      dispatch(getLikedMovies(email));
    }
  }, [email]);

  window.onscroll = () => {
    setScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className="likedmovie">
      <Navbar scroll={scroll} />
      <div className="content-grid">
        <h1>My List</h1>
        <div className="content-flex">
          {movies &&
            movies.map((movie, index) => {
              return (
                <Items
                  moviesData={movie}
                  index={index}
                  key={movie.id}
                  isLiked={true}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default LikedMovies;
