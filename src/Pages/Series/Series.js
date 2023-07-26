import React, { useEffect, useState } from "react";
import "./series.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import SelectGenre from "../../components/genre/SelectGenre";
import CardSlider from "../../components/Slider/CardSlider";
import { fetchMovies, getGenres } from "../../redux/store";

const Series = () => {
  const [scroll, setScroll] = useState(false);
  const movies = useSelector((state) => state.flixxit.movies);
  const genres = useSelector((state) => state.flixxit.genres);
  const genresLoaded = useSelector((state) => state.flixxit.genresLoaded);
  //const dataLoading = useSelector((state) => state.flixxit.dataLoading);

  //   const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToList = useSelector((state) => state.flixxit.handleAddToList);

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
  const handleAddClick = (movieData) => {
    handleAddToList(movieData);
  };

  return (
    <div className="series-page">
      <Navbar scroll={scroll} />

      <div className="data">
        <SelectGenre genres={genres} type="tv" />
        {movies.length ? (
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

export default Series;
