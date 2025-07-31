import axios from "axios";
import React, { useState, useContext } from "react";
import { Link } from "react-router";
import { UserDataContext } from "../context/usercontext";
import { useNavigate } from "react-router";
const Userlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userdata, setUserdata] = useState({});
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    setUserdata({
      email: email,
      password: password,
    });

    setEmail("");
    setPassword("");

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userdata
    );
    if (response.status === 201) {
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      navigate('/home');
    }
  }

  return (
    <div className=" p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-40  mb-10 pl- "
          src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
          alt=""
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
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
          New here?{" "}
          <Link to="/user-signup" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] justify-center flex item-center text-white mb-7 rounded px-4 py-3 w-full text-lg "
        >
          Sign in as captain
        </Link>
      </div>
    </div>
  );
};

export default Userlogin;
