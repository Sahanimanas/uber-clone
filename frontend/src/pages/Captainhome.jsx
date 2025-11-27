import React from 'react';
import { Link } from 'react-router';

const Captainhome = (props) => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <img
        className="fixed w-16 m-4"
        src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
        alt=""
      />
      <div className="absolute top-4 right-4 z-10">
        <Link to="/logout" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 text-white hover:text-red-600 hover:bg-red-200 transition-colors">
          <i className="ri-logout-box-r-line text-xl"></i>
        </Link>
      </div>
      <div className=" w-full h-[70%] ">
        <img
          className=" w-full h-full object-cover"
          src="https://imgs.search.brave.com/XhLG88NheOLw-0khcjnhETh8dZedlxlLGLOHXb21p04/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWFwcHIuY28vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDUv/dWJlci1taWRkbGUt/ZWFzdC1tYXAtMS00/NTB4NDUwLnBuZw"
          alt=""
        />
      </div>
      <div id='captain' className="w-full h-[30%] bg-white relative">
        <div className="absolute top-6 left-6 right-6 flex flex-col gap-4 w-[calc(100%-3rem)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Captain"
                className="w-10 h-10 rounded-full object-cover border border-gray-300"
              />
              <span className="text-base font-medium text-gray-800">Joe Smith</span>
            </div>
          <div className='flex flex-col items-end'>
          <span className="text-lg font-bold text-gray-900">₹192</span>
            <span className='text-sm text-gray-600'>Earned</span>
            </div>
           
          </div>
          <div className="bg-yellow-300 rounded-xl flex justify-between items-center mt-2 w-full py-1 px-1">
            {/* Time */}
            <div className="flex flex-col items-center flex-1">
              <i className="ri-time-line text-2xl text-gray-700 mb-0"></i>
              <span className="text-xl font-bold text-gray-900 mt-0">12:30</span>
              <span className="text-xs text-gray-700 mt-0">Hours Ride</span>
            </div>
            {/* Distance */}
            <div className="flex flex-col items-center flex-1">
              <i className="ri-speed-up-line text-2xl text-gray-700 mb-0"></i>
              <span className="text-xl font-bold text-gray-900 mt-0">8.2</span>
              <span className="text-xs text-gray-700 mt-0">Total distance</span>
            </div>
            {/* Notes */}
            <div className="flex flex-col items-center flex-1">
              <i className="ri-sticky-note-line text-2xl text-gray-700 mb-0"></i>
              <span className="text-xl font-bold text-gray-900 mt-0">2</span>
              <span className="text-xs text-gray-700 mt-0">Hours Online</span>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default Captainhome;