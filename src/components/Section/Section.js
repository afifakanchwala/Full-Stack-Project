import React, { useRef, useState } from "react";
import "./section.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Items from "../Items/Items";

const Section = ({ title, data }) => {
  const [isMove, setIsMove] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMove(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "back" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${204 + distance}px)`;
    }

    if (direction === "forward" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-204 + distance}px)`;
    }
  };

  return (
    <div className="section">
      <span className="title">{title}</span>
      <div className="wrap">
        <MdOutlineArrowBackIosNew
          className="arrow back"
          onClick={() => handleClick("back")}
          style={{ display: !isMove && "none" }}
        />
        <div className="list" ref={listRef}>
          {data.map((movie, index) => {
            return <Items moviesData={movie} index={index} key={movie.id} />;
          })}
        </div>
        <MdOutlineArrowForwardIos
          className="arrow forward"
          onClick={() => handleClick("forward")}
        />
      </div>
    </div>
  );
};

export default Section;
