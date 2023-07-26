import React from "react";
import HomePage from "./Pages/Homepage/HomePage";
import Play from "./Pages/Play/Play";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login Page/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Movies from "./Pages/Movies/Movies";

import New from "./Pages/New and popular/New";
import LikedMovies from "./Pages/User/LikedMovies";
import Series from "./Pages/Series/Series";
//import { useContext } from "react";
//import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  //const user = true;
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          // element={user ? <HomePage /> : <Navigate to="/register" />}
          element={<HomePage />}
        />
        <Route
          path="/register"
          // element={!user ? <Register /> : <Navigate to="/" />}
          element={<Register />}
        />

        <Route
          path="/login"
          // element={!user ? <Login /> : <Navigate to="/" />}
          element={<Login />}
        />
        {/* {user && (
          <> */}
        <Route path="/movies" element={<Movies type="movies" />} />
        <Route path="/series" element={<Series type="series" />} />
        <Route path="/newandpopular" element={<New type="new and popular" />} />
        <Route path="/mylist" element={<LikedMovies type="mylist" />} />

        <Route path="/watch" element={<Play />} />
        {/* </>
        )} */}
      </Routes>
    </Router>
  );
};

export default App;
