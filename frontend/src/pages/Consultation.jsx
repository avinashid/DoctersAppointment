import { useContext, useEffect } from "react";
import { stateContext } from "../context/StateContext";
import Profile from "../components/Profile";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { SlClock } from "react-icons/sl";

import { SlCalender } from "react-icons/sl";

const Consultation = () => {
  const navigate = useNavigate();
  const { currentRoom, currentTime, currentDate } = useContext(stateContext);
  console.log(currentDate, currentTime, currentRoom);
  useEffect(() => {
    if (currentTime === -1) navigate("/");
  }, [currentTime, navigate]);

  return (
    <div className="flex gap-4 flex-col">
      <Profile />
      <div className="text-xl font-semibold mx-8">Appointment Summary</div>
      <div className="flex flex-row justify-around">
        <div className="font-semibold flex flex-row gap-2">
          <div className="text-2xl text-green-500 bg-green-100 rounded-full p-2 self-center border-green-400 border-4 ">
            <FaHome />
          </div>
          <div className="flex flex-col gap-1 font-semibold">
            <div className="text-lg ">{currentRoom} Consultation</div>
            <div className="text-xs text-green-500">Fees approx ₹ 500</div>
            <div className="text-xs text-blue-600">
              {currentRoom === "clinic" && "(pay at clinic)"}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <div className="text-green-600 text-xl">
              <SlClock />
            </div>
            <div>{currentTime}</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-green-600 text-xl ">
              <SlCalender />
            </div>
            <div>{currentDate.toLocaleDateString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
