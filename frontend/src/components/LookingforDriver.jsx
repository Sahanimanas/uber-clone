import React from 'react'

const LookingforDriver = (props) => {
  return (
    <div>
      <h2
        onClick={() => {
          props.setLookingforDriver(false);
        }}
      >
        <i className="ri-arrow-down-s-fill absolute right-10 top-4 text-2xl"></i>
      </h2>

      <h2 className="text-xl pb-3 pl-1 pt-4 font-medium">Looking for a Driver</h2>
     <div className="flex -mt-3 flex-col items-center justify-center">
      <img
          className="h-20 "
          src="https://imgs.search.brave.com/jPap5nhox9X-B8J_v_PewPA3W6F3deLAxtKijwcBrhs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTEzLzE0MS9zbWFs/bC93aGl0ZS1jaXR5/LWNhci1pc29sYXRl/ZC1vbi10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLTNkLXJlbmRl/cmluZy1pbGx1c3Ry/YXRpb24tZnJlZS1w/bmcucG5n"
          alt="car"
        />
     </div>
      <div className="flex flex-col items-center justify-center text-start">
        
        <div>
          <div className="flex  ">
            <h2 className="flex items-center justify-center mt-5 bg-[#eee] rounded-full w-10 h-8">
              <i className="ri-map-pin-fill"></i>
            </h2>

            <h4 className="pl-5 pt-5  font-medium">
              B62, 2nd Floor, Sector 62, Noida
            </h4>
          </div>
          <div className="flex">
            <h2 className="flex items-center justify-center mt-5 bg-[#eee] rounded-full w-10 h-8">
              <i className="ri-map-pin-fill"></i>
            </h2>

            <h4 className="pl-5 pt-5 font-medium">
              B62, 2nd Floor, Sector 62, Noida
            </h4>
          </div>
          <div className="flex ">
            <h2 className="flex items-center justify-center mt-5 bg-[#eee] rounded-full w-10 h-8">
            <i className="ri-price-tag-2-line"></i>
            </h2>

            <h4 className="pl-5 pt-5 font-medium">
               ₹192.49
               
            </h4>
           <h4 className=" pt-5 font-light">
              (<i className="ri-money-dollar-circle-line"></i>Cash)
            </h4>

          </div>
        </div>
      </div>
    </div>
  )
}

export default LookingforDriver