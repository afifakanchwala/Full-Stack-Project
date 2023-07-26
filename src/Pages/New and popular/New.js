import React, { useEffect, useState } from "react";
import "./New.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../../redux/store";
import Navbar from "../../components/navbar/Navbar";
import SelectGenre from "../../components/genre/SelectGenre";
import CardSlider from "../../components/Slider/CardSlider";

const New = () => {
  const [scroll, setScroll] = useState(false);
  const movies = useSelector((state) => state.flixxit.movies);
  const genres = useSelector((state) => state.flixxit.genres);
  const genresLoaded = useSelector((state) => state.flixxit.genresLoaded);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "tv" }));
    }
  }, [genresLoaded, genres]);

  window.onscroll = () => {
    setScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className="new">
      <div>
        <Navbar scroll={scroll} />
      </div>
      <div className="data">
        <SelectGenre genres={genres} type="tv" />
        {movies && movies.length > 0 ? (
          <CardSlider movies={movies} />
        ) : (
          <h1 className="not-available">
            No Series available for selected genre. Please select different
            genre.
          </h1>
        )}
      </div>
    </div>
  );
};

export default New;
