import React from "react";
import "./cardSlider.css";
import Section from "../Section/Section";

const CardSlider = ({ movies }) => {
  const moviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <div>
      <Section title="Upcoming" data={moviesFromRange(0, 10)} />
      <Section title="Now Playing" data={moviesFromRange(10, 20)} />
      <Section title="Popular" data={moviesFromRange(20, 30)} />
      <Section title="Top Rated" data={moviesFromRange(30, 40)} />
      <Section title="Action Movies" data={moviesFromRange(40, 50)} />
      <Section title="Epics" data={moviesFromRange(50, 60)} />
    </div>
  );
};

export default CardSlider;
