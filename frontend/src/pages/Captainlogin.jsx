import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { CaptainDatacontext } from "../context/Captaincontext";
import axios from "axios";
const Captainlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const { captain, setCaptain } = useContext(CaptainDatacontext);

const submitHandler =(e)=>{
  e.preventDefault();
const payload = {
    email:email,
    password:password
  }
  

  // setEmail('')
  // setPassword('')

  axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, payload)
  .then((response)=>{
    if(response.status === 200){
      setCaptain(response.data.captain);
      localStorage.setItem('token', response.data.token);
      navigate('/captain-home');
    
    }
  }).catch((error)=>{
    console.error("Login failed:", error);
    alert("Login failed. Please check your credentials.");
  })
}


  return (
    <div className=" p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20  mb-10  "
          src="https://imgs.search.brave.com/rSuSSYacx1C8jOOc6iUc_xal-ahK3vL90Pl-NKUkJSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2MTQy/NXViZXItZHJpdmVy/LWxvZ28tcG5nLnBu/Zw"
          alt=""
        />

        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-3 w-full text-lg placeholder:text-base"
            type="email"
          />
          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="password"
            className="bg-[#eeeeee] mb-7  rounded px-4 py-3 w-full text-lg placeholder:text-base"
            type="text"
          />
          <button className="bg-[#111] text-white mb-7 rounded px-4 py-3 w-full text-lg ">
            Login
          </button>
        </form>
        <p className=" text-center -mt-4">
          {" "}
        Join the fleet?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/user-login"
          className="bg-[#1044b4] justify-center flex item-center text-white mb-7 rounded px-4 py-3 w-full text-lg "
        >
          Sign in as user
        </Link>
      </div>
    </div>
  );
}

export default Captainlogin