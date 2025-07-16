import React, { useState, useContext } from "react";
import { Link } from "react-router";
import axios from "axios";
import { UserDataContext } from "../context/usercontext";
import { useNavigate } from "react-router";

const Usersignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userdata, setUserdata] = useState({});

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
   const payload = {
      email: email,
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },

      password: password,
    };
    // setFirstname("");
    // setEmail("");
    // setPassword("");
    // setLastname("");
    setUser(payload);
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,payload
    )
console.log(response.data);
    if (response.status === 201) {
      setUser(response.data.user);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    }
  };

  return (
    <div className=" p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20  mb-10  "
          src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
          alt=""
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">Enter name</h3>

          <div className="flex gap-4">
            <input
              required
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              value={firstname}
              placeholder="firstname"
              className="bg-[#eeeeee] mb-7 rounded px-4 py-3 w-full text-lg placeholder:text-base"
              type="text"
            />

            <input
              required
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              value={lastname}
              placeholder="lastname"
              className="bg-[#eeeeee] mb-7 rounded px-4 py-3 w-full text-lg placeholder:text-base"
              type="text"
            />
          </div>
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

          <h3 className="text-lg font-medium mb-2 ">Enter password</h3>
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
            Register
          </button>
        </form>
        <p className=" text-center -mt-4">
          <Link to="/user-login" className="text-blue-600">
            Already have an Account!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Usersignup;
