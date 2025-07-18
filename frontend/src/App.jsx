import React from "react";
import { Route, Routes } from "react-router";
import Start from "./components/Start";
import Home from "./components/Home"
import Usersignup from "./components/usersignup";
import Captainlogin from "./components/captainlogin";
import  Captainsignup  from "./components/captainsignup";
import Userlogin from "./components/userlogin";
import Userprotected from "./components/Userprotected";
import Userlogout from "./components/userlogout";

const App = () => {
  return (

      <Routes>
        <Route path="/start" element={<Start/>} />
        <Route path="/user-login" element={<Userlogin/>} />
        <Route path="/user-signup" element={<Usersignup/>} />
        <Route path="/captain-login" element={<Captainlogin/>} />
        <Route path="/captain-signup" element={<Captainsignup/>} />
        <Route path="/" element={
          <Userprotected> <Home/> </Userprotected>
         } />
          <Route path="/users/logout" element={
          <Userprotected> <Userlogout/> </Userprotected>
         } />

      </Routes>

  );
};

export default App;
