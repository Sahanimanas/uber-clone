import React from "react";
import { Route, Routes } from "react-router";
import Start from "./pages/Start";
import Home from "./pages/Home"
import Usersignup from "./pages/Usersignup";
import Captainlogin from "./pages/Captainlogin";
import  Captainsignup from "./pages/Captainsignup";
import Userlogin from "./pages/Userlogin";
import Userprotected from "./pages/Userprotected";
import Userlogout from "./pages/Userlogout";
import Captainlogout from "./pages/Captainlogout";
import Captainhome from "./pages/Captainhome";
import Captainprotect from "./pages/Captainprotect";
import Riding from "./pages/Riding";

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/user-login" element={<Userlogin/>} />
        <Route path="/riding" element={<Riding/>} />
        <Route path="/user-signup" element={<Usersignup/>} />
        <Route path="/captain-login" element={<Captainlogin/>} />
        <Route path="/captain-signup" element={<Captainsignup/>} />
        <Route path="/home" element={
          <Userprotected> <Home/> </Userprotected>
         } />
          <Route path="/users/logout" element={
          <Userprotected> <Userlogout/> </Userprotected>
         } />
        <Route path="/captain/logout" element={
          <Userprotected> <Captainlogout/> </Userprotected>
         } />
        <Route path="/captain-home" element={
          <Captainprotect> <Captainhome/> </Captainprotect>
         } />
      </Routes>

  );
};

export default App;
