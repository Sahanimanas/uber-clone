import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";

import Usersignup from "./components/usersignup";
import Captainlogin from "./components/captainlogin";
import  Captainsignup  from "./components/captainsignup";
import Userlogin from "./components/userlogin";

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user-login" element={<Userlogin/>} />
        <Route path="/user-signup" element={<Usersignup/>} />
        <Route path="/captain-login" element={<Captainlogin/>} />
        <Route path="/captain-signup" element={<Captainsignup/>} />
      </Routes>

  );
};

export default App;
