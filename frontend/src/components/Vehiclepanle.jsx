import React from 'react'

const Vehiclepanel = (props) => {
  return (
    <div>
        <h2 onClick={() => {
          props.setVehiclepanelopen(false);
        }}>
          <i className="ri-arrow-down-s-fill absolute right-10 top-4 text-2xl"></i>
        </h2>
        <h2 className="text-xl pb-3 pl-1 pt-4 font-medium">Choose Vehicle</h2>
        <div onClick={() => {
            props.setConfirmRidepanel(true), props.setVehiclepanelopen(false);
        }} className="flex border-1 mb-2 border-b-2 rounded-xl w-full p-1 items-center justify-center">
          <img
            className="h-10 pr-9"
            src="https://imgs.search.brave.com/Rfh17TJf0rRnalGAmkl1YbbcG4_ubzfD5wXaRIChXuQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTQ2Lzc0NC9zbWFs/bC93aGl0ZS1jaXR5/LWNhci1pc29sYXRl/ZC1vbi10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLTNkLXJlbmRl/cmluZy1pbGx1c3Ry/YXRpb24tZnJlZS1w/bmcucG5n"
            alt="car"
          />
          <div className="ml-2 w-1/2">
            <h3 className="font-medium text-[17px]">
              {" "}
              Uber auto
              <span>
                {" "}
                <i className="ri-user-3-fill"></i>
              </span>
            </h3>
            <h3 className="font-medium text-sm"> 3 mins away</h3>
            <p className="font-normal text-xs text-gray-600">
              Affordable car rides
            </p>
          </div>
          <h2 className="text-base font-semibold">₹163</h2>
        </div>

        <div  onClick={() => {
            props.setConfirmRidepanel(true), props.setVehiclepanelopen(false);
        }} className="flex border-1 border-b-2 mb-2 border-black rounded-xl w-full p-1 items-center justify-center">
          <img
            className="h-10 pr-9"
            src="https://imgs.search.brave.com/Rfh17TJf0rRnalGAmkl1YbbcG4_ubzfD5wXaRIChXuQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTQ2Lzc0NC9zbWFs/bC93aGl0ZS1jaXR5/LWNhci1pc29sYXRl/ZC1vbi10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLTNkLXJlbmRl/cmluZy1pbGx1c3Ry/YXRpb24tZnJlZS1w/bmcucG5n"
            alt="car"
          />
          <div className="ml-2 w-1/2">
            <h3 className="font-medium text-[17px]">
              {" "}
              Uber auto
              <span>
                {" "}
                <i className="ri-user-3-fill"></i>
              </span>
            </h3>
            <h3 className="font-medium text-sm"> 3 mins away</h3>
            <p className="font-normal text-xs text-gray-600">
              Affordable motorcycle rides
            </p>
          </div>
          <h2 className="text-base font-semibold">₹163</h2>
        </div>
    </div>
  )
}

export default Vehiclepanel 