import React from "react";

const Locationsearchpanel = (props) => {
  const location = [
    "B62, 2nd Floor, Sector 62, Noida, Uttar Pradesh 201309",
    "B62, 2nd Floor, Sector 122, Noida, Uttar Pradesh 201309",
    "B62, 2nd Floor, Sector 50, Noida, Uttar Pradesh 201309",
    "B62, 2nd Floor, Sector 63, Noida, Uttar Pradesh 201309",
    "B62, 2nd Floor, Sector 22, Noida, Uttar Pradesh 201309",
    "B62, 2nd Floor, Sector 62, Noida, Uttar Pradesh 201309",
  ]
  return (
    <div>
         {
          location.map((elem, idx)=>(
                        <div key={idx} onClick={() => {
                          props.setVehiclepanelopen(true);
                          props.setPanel(false);           }}
                         className="flex  pl-5 border-b-2 border-gray-200 rounded-2xl active:bg-gray-100">
        <h2 className="flex items-center justify-center mt-5 bg-[#eee] rounded-full w-10 h-8">
          <i className="ri-map-pin-fill"></i>
        </h2>

        <h4 className="p-3 font-medium">
         {elem}
        </h4>
      </div>
          ))
         }

    </div>

  );
};

export default Locationsearchpanel;
