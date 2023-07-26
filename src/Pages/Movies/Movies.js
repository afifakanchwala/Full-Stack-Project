import React, { useEffect, useState } from "react";
import "./movies.css";
import Navbar from "../../components/navbar/Navbar";
import Section from "../../components/Section/Section";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMovies, getGenres } from "../../redux/store";
import Items from "../../components/Items/Items";
import Header from "../../components/Header/Header";
import NotAvailable from "../../components/Not available/NotAvailable";
import SelectGenre from "../../components/genre/SelectGenre";
import CardSlider from "../../components/Slider/CardSlider";
// import SelectGenre from "../../components/genre/";

const Movies = () => {
  const [scroll, setScroll] = useState(false);
  const movies = useSelector((state) => state.flixxit.movies);
  const genres = useSelector((state) => state.flixxit.genres);
  const genresLoaded = useSelector((state) => state.flixxit.genresLoaded);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "all" }));
  }, [genresLoaded]);

  console.log(genresLoaded);

  window.onscroll = () => {
    setScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className="moviepage">
      <Navbar scroll={scroll} />

      <div className="data">
        <SelectGenre genres={genres} type="movie" />
        {movies.length ? <CardSlider movies={movies} /> : <NotAvailable />}
      </div>
    </div>
  );
};

export default Movies;

{
  /* <div className="moviepage">
        <Navbar scroll={scroll} />
      </div>
      <div className="data">
         <SelectGenre genres={genres} type="movie" /> 
        {movies.length ? <Section movies={movies} /> : <NotAvailable />}
      </div> */
}
