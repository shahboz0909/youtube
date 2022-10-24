import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Login from "./components/Login/Login"
import Home from "./components/Home/Home";
import Path from "./components/Path/Path";
import Navbar from "./components/Navbar/Navbar";
import Subs from "./components/Subscriptions/Subs";
import Trending from "./components/Trending/Trending";


function App() {
  const { pathname } = useLocation();

  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const user = {
    username: "shaxboz",
    password: "801701",
  };

  const useAuth = (params) => {
    return user.username === params.userName &&
      user.password === params.password
      ? navigate("/home2")
      : navigate("/");
  };

  return (
    <>

    {pathname === '/' ? (

      <Login isLogin={auth} login={useAuth} />
    )
       : (
          <Path />
        //  <Routes>
             /* <Route path="/trending" element={<Trending /> } />
               <Route path="/subs" element={<Subs /> } /> */

            /* </Routes> */

       )}
       {/* {pathname === '/home' ? (
          <Home />,
          <Navbar /> ,
          <Path />  

       ) : ""} */}
          
    </>
  )
}

export default App;
