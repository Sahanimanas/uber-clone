import React from 'react'

const WaitingforDriver = (props) => {
  return (
    <div>
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

    {/* Send message box with arrow inside input */}
    <div className="flex items-center mt-8 ml-4 relative w-40">
      <input
        type="text"
        placeholder="Send a message..."
        className="w-full bg-gray-100 placeholder-gray-500 border-none rounded-full px-3 py-1 text-sm focus:outline-none pr-8"
        style={{ paddingRight: '2rem' }}
      />
      <span className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center cursor-pointer">
        <i className="ri-send-plane-2-fill text-lg text-gray-500"></i>
      </span>
    </div>

    {/* Action buttons */}
    <div className="flex gap-2 mt-8 mb-2 justify-center">
      <button className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-medium">
        <i className="ri-shield-user-line text-lg"></i>
        Safety
      </button>
      <button className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-medium">
        <i className="ri-share-forward-line text-lg"></i>
        Share My Trip
      </button>
      <button className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-medium">
        <i className="ri-phone-line text-lg"></i>
        Call Driver
      </button>
    </div>

    {/* Address bar below action buttons */}
    <div className="flex items-center justify-center mt-4 mb-2">
      <div className="flex items-center border-b-2 border-b-gray-300 rounded-[10px] px-4 py-2 w-full max-w-[500px]" style={{ background: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
        <i className="ri-map-pin-2-fill text-gray-500 text-xl mr-8"></i>
        <span className="flex flex-col items-start truncate leading-tight">
          <span className="text-black text-lg font-semibold leading-tight">B62,</span>
          <span className="text-gray-500 text-sm font-normal truncate leading-tight">2nd Floor, Sector 62, Noida</span>
        </span>
      </div>
    </div>
      </div>
    </div>
  );
}

export default WaitingforDriver