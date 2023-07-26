import React from "react";
import { useDispatch } from "react-redux";
import "./selectgenre.css";
import { fetchDataByGenre } from "../../redux/store";

const SelectGenre = ({ genres, type }) => {
  const dispatch = useDispatch();
  return (
    <select
      className="flex"
      onChange={(e) => {
        dispatch(fetchDataByGenre({ genres, genre: e.target.value, type }));
      }}
    >
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectGenre;
