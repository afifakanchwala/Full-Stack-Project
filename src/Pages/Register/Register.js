// import React, { useEffect, useState } from "react";
// import "./register.css";
// import axios from "axios";
// import { Link, Navigate, useNavigate } from "react-router-dom";

// const Register = () => {
//   // TO STORE E-MAIL ADDRESS AND PAASWORD we USE useState
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [userMessage, setUserMessage] = useState("");
//   const navigate = useNavigate();

//   const [errorMessage, setErrorMessage] = useState("");

//   // useEffect(() => {
//   //   const storedUsername = localStorage.getItem("username");
//   //   if (storedUsername && storedUsername !== "") {
//   //     setUsername(storedUsername);
//   //     Navigate("/");
//   //   }
//   // }, []);

//   const register = (e) => {
//     e.preventDefault();
//     if (
//       username.trim() === "" ||
//       email.trim() === "" ||
//       password.trim() === ""
//     ) {
//       window.alert("Please enter all the fields.");
//       return;
//     }

//     axios
//       .post("http://localhost:3001/register", {
//         username: username,
//         email: email,
//         password: password,
//       })
//       .then((res) => {
//         console.log("Response Data:", res.data);
//         if (res.data.success === true) {
//           localStorage.setItem("username", username);
//           setUsername(username);
//           navigate("/");
//         } else if (
//           res.data.message === "User already exists" &&
//           typeof res.data.message === "string"
//         ) {
//           alert("User already exists.");
//         } else if (
//           res.data.message === "Invalid email" &&
//           typeof res.data.message === "string"
//         ) {
//           alert(
//             "Please enter a valid email." &&
//               typeof res.data.message === "string"
//           );
//         } else {
//           console.log("Error Message:", res.data.message);
//           alert(res.data.message);
//         }
//       })
//       .catch((error) => {
//         console.log("Error:", error);
//         window.alert("An error occurred during registration.");
//       });

//     // .then((res) =>
//     //   res.data.success === true
//     //     ? (window.location.href = "/")
//     //     : setUserMessage(res.data.message)
//     // );

//     // .then((res) => {
//     //   if (res.data.success === true) {
//     //     localStorage.setItem("username", username);
//     //     setUsername(username);
//     //     Navigate("/");
//     //   } else {
//     //     setUserMessage(res.data.message);
//     //   }
//     // });
//   };

//   return (
//     <div className="register">
//       <div className="first">
//         <span className="logo">FLIXXIT </span>
//       </div>
//       <div className="container-one">
//         <h1>Unlimited movies, TV shows, and more.</h1>
//         <h2>Watch anywhere. Cancel anytime.</h2>
//         <p>
//           Ready to watch? Enter your email to create or restart your membership.
//         </p>

//         <div className="started">
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           />
//           <input
//             type="email"
//             placeholder="Email address"
//             name="email"
//             value={email}
//             required
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//           <input
//             type="username"
//             placeholder="username"
//             name="username"
//             value={username}
//             onChange={(e) => {
//               setUsername(e.target.value);
//             }}
//           />
//         </div>

//         <div className="on-wrapper">
//           <Link to="/">
//             <button className="register-btn" onClick={register}>
//               Get Started
//             </button>
//           </Link>

//           <Link to="/login">
//             <button className="Sign-btn">Sign In</button>
//           </Link>
//         </div>
//       </div>
//       <div>
//         <p>Welcome, {localStorage.getItem("username")}</p>
//       </div>
//       {errorMessage && (
//         <p className="error-message">{errorMessage.toString()}</p>
//       )}
//     </div>
//   );
// };

// export default Register;

// import React, { useEffect, useState } from "react";
// import "./register.css";
// import axios from "axios";
// import { Link, Navigate, useNavigate } from "react-router-dom";

// const Register = () => {
//   // TO STORE E-MAIL ADDRESS AND PAASWORD we USE useState
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [userMessage, setUserMessage] = useState("");
//   const navigate = useNavigate();

//   const [errorMessage, setErrorMessage] = useState("");

//   // useEffect(() => {
//   //   const storedUsername = localStorage.getItem("username");
//   //   if (storedUsername && storedUsername !== "") {
//   //     setUsername(storedUsername);
//   //     Navigate("/");
//   //   }
//   // }, []);

//   const register = (e) => {
//     e.preventDefault();
//     if (
//       username.trim() === "" ||
//       email.trim() === "" ||
//       password.trim() === ""
//     ) {
//       window.alert("Please enter all the fields.");
//       return;
//     }

//     axios
//       .post("http://localhost:3001/register", {
//         username: username,
//         email: email,
//         password: password,
//       })
//       .then((res) => {
//         if (res.data.success === true) {
//           navigate("/");
//         } else {
//           setUserMessage(res.data.message);
//         }
//       });
//   };

//   // .then((res) => {
//   //   console.log("Response Data:", res.data);
//   //   if (res.data.success === true) {
//   //     localStorage.setItem("username", username);
//   //     setUsername(username);
//   //     navigate("/");
//   //   } else if (
//   //     res.data.message === "User already exists"
//   //   ) {
//   //     setErrorMessage("User already exists.");
//   //   } else if (
//   //     res.data.message === "Invalid email"
//   //   ) {
//   //     setErrorMessage(
//   //       "Please enter a valid email."
//   //     );
//   //   } else {
//   //     console.log("Error Message:", res.data.message);
//   //     setErrorMessage(res.data.message);
//   //   }
//   // })

//   // .then((res) =>
//   //   res.data.success === true
//   //     ? (window.location.href = "/")
//   //     : setUserMessage(res.data.message)
//   // );

//   // .then((res) => {
//   //   if (res.data.success === true) {
//   //     localStorage.setItem("username", username);
//   //     setUsername(username);
//   //     Navigate("/");
//   //   } else {
//   //     setUserMessage(res.data.message);
//   //   }
//   // });

//   return (
//     <div className="register">
//       <div className="first">
//         <span className="logo">FLIXXIT </span>
//       </div>
//       <div className="container-one">
//         <h1>Unlimited movies, TV shows, and more.</h1>
//         <h2>Watch anywhere. Cancel anytime.</h2>
//         <p>
//           Ready to watch? Enter your email to create or restart your membership.
//         </p>
//         <div className="started">
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           />
//           <input
//             type="email"
//             placeholder="Email address"
//             name="email"
//             value={email}
//             required
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//           <input
//             type="username"
//             placeholder="username"
//             name="username"
//             value={username}
//             onChange={(e) => {
//               setUsername(e.target.value);
//             }}
//           />
//         </div>
//         <div className="on-wrapper">
//           <Link to="/">
//             <button className="register-btn" onClick={register}>
//               Get Started
//             </button>
//           </Link>

//           <Link to="/login">
//             <button className="Sign-btn">Sign In</button>
//           </Link>
//         </div>
//       </div>
//       <div>
//         <p>Welcome, {localStorage.getItem("username")}</p>
//       </div>
//       {/* {errorMessage && (
//         <p className="error-message">{errorMessage.toString()}</p>
//       )} */}
//     </div>
//   );
// };

// export default Register;

import React, { useEffect, useState } from "react";
import "./register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername && storedUsername !== "") {
      setUsername(storedUsername);
      navigate("/");
    }
  }, []);

  const validateEmail = (email) => {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return emailPattern.test(email);
  };

  const register = (e) => {
    e.preventDefault();
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      window.alert("Please enter all the fields.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Invalid email address format.");
      return; // Stop form submission if the email is invalid
    } else {
      setUserMessage(""); // Reset the error message when the email format is valid
    }

    axios
      .post(`${base_url}/register`, {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data.message);
        if (res.data.success === true) {
          localStorage.setItem("username", username);
          setUsername(username);
          navigate("/");
        } else {
          setUserMessage(res.data.message);
          if (res.data.message === "Account already exist") {
            alert("User acoount already exist.");
          } else {
            console.log(res.data.message);
            alert("Account already exist.");
          }
        }

        //   else if (res.data.message === "Account already exists") {
        //     alert("Your account already exists."); // Display alert for existing account
        //   } else {
        //     setUserMessage(res.data.message);
        //   }
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred. Please try again later.");
        // Handle any other errors here if needed
      });
  };

  return (
    <div className="register">
      <div className="first">
        <span className="logo">FLIXXIT</span>
      </div>
      <div className="container-one">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="started">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email address"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="username"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* <p>{userMessage}</p> */}
        </div>
        <div className="wrapper">
          <button className="register-btn" onClick={register}>
            Get Started
          </button>
          <Link to="/login">
            <button className="Sign-btn">Sign In</button>
          </Link>
        </div>
      </div>
      <div>
        <p>Welcome, {localStorage.getItem("username")}</p>
      </div>
    </div>
  );
};

export default Register;
