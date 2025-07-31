import React from 'react'
import { Link } from 'react-router';

const Riding = () => {
return (
    <div className="w-full h-screen relative overflow-hidden">
      <img
        className="fixed w-16 m-4"
        src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
        alt=""
      />
      <div className="absolute top-4 right-4 z-10">
        <Link to="/home" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 text-white hover:text-blue-600 hover:bg-blue-200 transition-colors">
          <i className="ri-home-4-line text-xl"></i>
        </Link>
      </div>
        <div>
<img
          className=" w-full h-1/2 object-cover"
          src="https://imgs.search.brave.com/XhLG88NheOLw-0khcjnhETh8dZedlxlLGLOHXb21p04/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWFwcHIuY28vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDUv/dWJlci1taWRkbGUt/ZWFzdC1tYXAtMS00/NTB4NDUwLnBuZw"
          alt=""
        />
        </div>
         
        <div className='bottom-0 relative h-1/2 overflow-y-auto'>
      <div className="w-full flex justify-center mt-0.5 mb-0">
        <h2
          onClick={() => {
            props.setWaitingforDriver(false);
          }}
          className="cursor-pointer"
          style={{ width: 'fit-content' }}
        >
          <i className="ri-arrow-down-s-fill text-2xl"></i>
        </h2>
      </div>
      <div className="relative">
        <div className="flex flex-row items-center justify-center w-full mt-1 px-4 py-2 rounded-lg shadow">
      <img
        className="h-20 w-32 object-contain mr-6"
        src="https://imgs.search.brave.com/jPap5nhox9X-B8J_v_PewPA3W6F3deLAxtKijwcBrhs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTEzLzE0MS9zbWFs/bC93aGl0ZS1jaXR5/LWNhci1pc29sYXRl/ZC1vbi10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLTNkLXJlbmRl/cmluZy1pbGx1c3Ry/YXRpb24tZnJlZS1w/bmcucG5n"
        alt="car"
      />
      <div className="flex flex-col items-end">
        <span className="font-semibold text-base">Amit Sharma</span>
        <span className="text-lg font-semibold">UP16 AB 1234</span>
        <span className="text-sm text-gray-500">Maruti Suzuki Swift</span>
        <div className="flex items-center">
          <span className="text-yellow-500 text-base mr-1">
            <i className="ri-star-fill"></i>
          </span>
          <span className="font-medium text-base">4.8</span>
        </div>
      </div>
    </div>

   
    <div>
      <div className="flex">
        <h2 className="flex items-center justify-center mt-2 bg-[#eee] rounded-full w-10 h-8">
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4 className="pl-3 pt-2 font-medium">
          B62, 2nd Floor, Sector 62, Noida
        </h4>
      </div>
      <div className="flex ">
        <h2 className="flex items-center justify-center mt-2 bg-[#eee] rounded-full w-10 h-8">
          <i className="ri-price-tag-2-line"></i>
        </h2>
        <h4 className="pl-3 pt-2 font-medium">
          ₹192.49
        </h4>
        <h4 className="pt-2 font-light">
          (<i className="ri-money-dollar-circle-line"></i>Cash)
        </h4>
      </div>
      <div className="flex justify-center mt-2 mb-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full px-8 py-2 text-base flex items-center gap-2 shadow">
          <i className="ri-wallet-3-line text-lg"></i>
          Make Payment
        </button>
      </div>
    </div>
        <div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Riding