import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { CaptainDatacontext } from "../context/Captaincontext";
import { useNavigate } from "react-router";
import axios from "axios";
const Captainsignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({});
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDatacontext);
  const submitHandler = async (e) => {
    e.preventDefault();
   const payload = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle:{
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        type: vehicleType,
      }
    };

    setFirstname("");
    setEmail("");
    setPassword("");
    setLastname("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");

    const response = await axios.post(  
      `${import.meta.env.VITE_BASE_URL}/captain/register`,
      payload
    );

    if (response.status === 201) {
      setCaptain(response.data.captain);
      localStorage.setItem('token', response.data.token);
     
      navigate("/captain-home");
       alert("Captain registered successfully");
    }
  };

  return (
    <div className=" p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20  mb-10  "
          src="https://imgs.search.brave.com/rSuSSYacx1C8jOOc6iUc_xal-ahK3vL90Pl-NKUkJSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2MTQy/NXViZXItZHJpdmVy/LWxvZ28tcG5nLnBu/Zw"
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

          <div className="flex gap-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Vehicle Color</h3>
              <input
                required
                onChange={(e) => setVehicleColor(e.target.value)}
                value={vehicleColor}
                placeholder="Vehicle color"
                className="bg-[#eeeeee] mb-7 rounded px-4 py-3 w-full text-lg placeholder:text-base"
                type="text"
              />
            </div>
            <div>
              {" "}
              <h3 className="text-lg font-medium mb-2">Vehicle Plate</h3>
              <input
                required
                onChange={(e) => setVehiclePlate(e.target.value)}
                value={vehiclePlate}
                placeholder="Vehicle plate"
                className="bg-[#eeeeee] mb-7 rounded px-4 py-3 w-full text-lg placeholder:text-base"
                type="text"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Vehicle capacity</h3>
              <input
                required
                onChange={(e) =>
                  setVehicleCapacity(e.target.value)
                }
                
                value={vehicleCapacity}
                placeholder="Vehicle capacity"
                className="bg-[#eeeeee] mb-7 rounded px-4 py-3 w-full text-lg placeholder:text-base"
                type="Number"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Vehicle Type</h3>
              <select
                required
                onChange={(e) => setVehicleType(e.target.value)}
                value={vehicleType}
                className="bg-[#eeeeee] mb-7 rounded px-4 py-3 w-full text-lg"
              >
                <option value="" disabled>
                  Select vehicle type
                </option>
                <option value="car">Car</option>
                <option value="fourwheeler">Four Wheeler</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>
          <button className="bg-[#111] text-white mb-7 rounded px-4 py-3 w-full text-lg ">
            Register
          </button>
        </form>
        <p className=" text-center -mt-4">
          <Link to="/captain-login" className="text-blue-600">
            Already have an Account!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Captainsignup;
