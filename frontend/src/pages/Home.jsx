import React, { use, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Locationsearchpanel from "../components/Locationsearchpanel";
import Vehiclepanel from "../components/Vehiclepanle";
import ConfirmRidePanel from "../components/ConfirmRidePanel";
import LookingforDriver from "../components/LookingforDriver";
const Home = () => {
  const [panel, setPanel] = useState(false);
  const [vehiclepanelopen, setVehiclepanelopen] = useState(false);
  const [lookingforDriver, setLookingforDriver] = useState(false);
  const [pickup, setPickup] = useState("");
  const [dest, setDest] = useState("");
  const panelref = useRef(null);
  const vehiclepanelref = useRef(null);
  const [confirmRidepanel, setConfirmRidepanel] = useState(false);
  const confirmRidepanelRef = useRef(null);
 const LookingforDriverref = useRef(null);
  const SubmitHandler = (e) => {
    e.preventDefault();
  };
 
useGSAP(() => {
    if (vehiclepanelopen ) {
      gsap.to(vehiclepanelref.current, {
      transform: "translateY(0%)",
      
      });
    } else {
      gsap.to(vehiclepanelref.current, {
      transform: "translateY(100%)",
      });
    }
  }, [vehiclepanelopen]);
 
useGSAP(() => {
    if (confirmRidepanel ) {
      gsap.to(confirmRidepanelRef.current, {
      transform: "translateY(0%)",
       overflow: "auto",
      
      });
    } else {
      gsap.to(confirmRidepanelRef.current, {
      transform: "translateY(100%)",
      });
    }
  }, [confirmRidepanel]);

  useGSAP(() => {
    if (lookingforDriver ) {
      gsap.to(LookingforDriverref.current, {
      transform: "translateY(0%)",
       overflow: "auto",
      
      });
    } else {
      gsap.to(LookingforDriverref.current, {
      transform: "translateY(100%)",
      });
    }
  }, [lookingforDriver]);
  useGSAP(() => {
    if (panel) {
      gsap.to(panelref.current, {
        height: "70%",
        duration:0.5,
         overflow: "auto",
     
 
      });
    } else {
      gsap.to(panelref.current, {
        height: "0%",
         overflow: "hidden",
      });
    }
  }, [panel]);

  return (
    <div className="relative">
      <img
        className="fixed w-16 m-4"
        src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
        alt=""
      />

      <div className="w-screen h-screen" onClick={() => {
        setVehiclepanelopen(false);
      }}>
        <img
          className=" w-full h-full object-cover"
          src="https://imgs.search.brave.com/XhLG88NheOLw-0khcjnhETh8dZedlxlLGLOHXb21p04/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWFwcHIuY28vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDUv/dWJlci1taWRkbGUt/ZWFzdC1tYXAtMS00/NTB4NDUwLnBuZw"
          alt=""
        />
      </div>

      <div className="w-full absolute top-0 flex flex-col justify-end h-screen">
        <div className="h-[30%] relative p-4 bg-white w-full">
          <h3 className="text-[20px] font-bold">Find a trip</h3>
          <h2
            className="absolute right-10 top-[20px]"
            onClick={() => {
              setPanel(false);setVehiclepanelopen(false)
            }}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h2>

          <form
            className="flex w-full text-base flex-col  "
            onSubmit={(e) => {
              SubmitHandler(e);
            }}
          >
            <input
              className="text-center bg-[#eee] p-1 rounded-3xl mt-3"
              type="text"
              placeholder="Add a pick-up location"
              onClick={() => setPanel(true)}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
            />

            <input
              type="text"
              className="text-center rounded-2xl bg-[#eee] p-1 mt-3"
              placeholder="Enter your destination"
              onClick={() => setPanel(true)}
              onChange={(e) => {
                setDest(e.target.value);
              }}
            />

            <select
              name="time"
              id=""
              className="bg-[#eee] p-2 text-[14px] rounded-3xl  mt-4 w-1/3"
            >
              <option value="00:00:00 AM">Leave Now</option>
              <option value="00:00:00 AM">10:11:33 AM</option>
              <option value="00:00:00 AM">00:00:00 AM</option>
              <option value="00:00:00 AM">10AM</option>
            </select>
          </form>
        </div>

        <div
          ref={panelref}
          className="bg-white relative bottom-0 "
        >
          <Locationsearchpanel setPanel={setPanel} setVehiclepanelopen={setVehiclepanelopen} />
        </div>
      </div>

      {/*choose car*/}
      <div  ref={vehiclepanelref} className="w-full bottom-0 h-[50%] bg-white p-2 fixed translate-y-full ">
        <Vehiclepanel setVehiclepanelopen={setVehiclepanelopen} setConfirmRidepanel={setConfirmRidepanel}/>
      </div>

      {/*details panel*/}
      <div  ref={confirmRidepanelRef} className="w-full bottom-0 h-auto bg-white p-2 fixed translate-y-full ">
        <ConfirmRidePanel setConfirmRidepanel={setConfirmRidepanel} setLookingforDriver={setLookingforDriver}/>
      </div>
     <div  ref={LookingforDriverref} className="w-full bottom-0 h-auto bg-white p-2 fixed translate-y-full ">
        <LookingforDriver setLookingforDriver={setLookingforDriver} />
      </div>
    </div>
  );
};

export default Home;
