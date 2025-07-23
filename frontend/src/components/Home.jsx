import React, { useState } from "react";

const Home = () => {
  const [ride,setRide] = useState(true)

  return (
    <div className="relative">
      <div>
        <img
          className="fixed w-16 m-4"
          src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
          alt=""
        />
      </div>
      <img
        className=" w-full h-screen object-cover"
        src="https://imgs.search.brave.com/XhLG88NheOLw-0khcjnhETh8dZedlxlLGLOHXb21p04/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWFwcHIuY28vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDUv/dWJlci1taWRkbGUt/ZWFzdC1tYXAtMS00/NTB4NDUwLnBuZw"
        alt=""
      />
      {
        ride?
        <div className="p-4 absolute bottom-0 bg-white w-full rounded-3xl h-1/3">
        <h3 className="text-[20px] font-bold">Find a trip</h3>
        <div className="flex w-full text-base flex-col ">
           <input className="text-center bg-[#eee] p-1 rounded-3xl mt-3" type="text" placeholder="Add a pick-up location" />
        <input type="text" className="text-center rounded-2xl bg-[#eee] p-1 mt-3" placeholder="Enter your destination" />
        <select name="time" id="" className="bg-[#eee] p-2 text-[14px] rounded-3xl  mt-4 w-1/3">
          <option value="00:00:00 AM">Leave Now</option>
          <option value="00:00:00 AM">10:11:33 AM</option>
          <option value="00:00:00 AM">00:00:00 AM</option>
          <option value="00:00:00 AM">10AM</option>
        </select>

        </div>
       
      </div>:
      <div>
          
      </div>
      }
      
      
      <div>

      </div>
    </div>
  );
};

export default Home;
