import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import Navbar from "../../components/navbar/Navbar";
import "./homepage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NotAvailable from "../../components/Not available/NotAvailable";
import CardSlider from "../../components/Slider/CardSlider";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../../redux/store";
import SelectGenre from "../../components/genre/SelectGenre";

// import SelectGenre from "../../components/genre";
//import { Link } from "react-router-dom";

// const apiKey = "0cd268f52e80c46d6db4ad9dab6f57b5";
// const url = "https://api.themoviedb.org/3";
// const upcoming = "upcoming";
// const nowPlaying = "now_playing";
// const popular = "popular";
// const topRated = "top_rated";

const HomePage = () => {
  const movies = useSelector((state) => state.flixxit.movies);
  //console.log(movies);
  const genres = useSelector((state) => state.flixxit.genres);
  // console.log(genres);
  const genresLoaded = useSelector((state) => state.flixxit.genresLoaded);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "all" }));
    }
  }, [genresLoaded]);

  // const [upcomingMovies, setUpcomingMovies] = useState([]);
  // const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  // const [popularMovies, setPopularMovies] = useState([]);
  // const [topRatedMovies, setTopRatedMovies] = useState([]);

  // useEffect(() => {
  //   const fetchUpcoming = async () => {
  //     const {
  //       data: { results },
  //     } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
  //     setUpcomingMovies(results);
  //   };

  //   const fetchnowPlaying = async () => {
  //     const {
  //       data: { results },
  //     } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
  //     setNowPlayingMovies(results);
  //   };

  //   const fetchpopular = async () => {
  //     const {
  //       data: { results },
  //     } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
  //     setPopularMovies(results);
  //   };
  //   const fetchtopRated = async () => {
  //     const {
  //       data: { results },
  //     } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
  //     setTopRatedMovies(results);
  //   };

  //   fetchUpcoming();
  //   fetchnowPlaying();
  //   fetchpopular();
  //   fetchtopRated();
  // }, []);

  return (
    <div className="home">
      {/*  */}
      <Navbar />
      <Header />
      <CardSlider movies={movies} />

      {/* <Section title={"Upcoming"} arr={upcomingMovies} />
      <Section title={"Now Playing"} arr={nowPlayingMovies} />
      <Section title={"Popular"} arr={popularMovies} />
      <Section title={"Top Rated"} arr={topRatedMovies} /> */}
    </div>
  );
};

{
  /* <Header type={type} setGenre={setGenre} /> */
}
{
  /* {Array.from({ length: 10 }).map((item, list) => (
        <Section key={list} item={item} />
      ))} */
}

{
  /* {Array.from({ length: 10 }).map((item, index) => (
            <Items key={index} item={item} />
          ))} */
}

{
  /* <Section />
      <Section />
      <Section />
      <Section /> */
}

export default HomePage;
