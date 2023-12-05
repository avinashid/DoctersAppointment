import { useContext } from "react";
import { MdAddHome } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import Calender from "./Calender";
import { stateContext } from "../context/StateContext";

const BookAppointment = () => {
  const { currentRoom, setCurrentRoom, setCurrentTime, setCurrentDate, fees} =
    useContext(stateContext);
  const handleRoomChange = async ({ room }) => {
    setCurrentRoom(room);
    setCurrentTime(-1);
    setCurrentDate(new Date());
  };
  const currentFees = fees.filter(data=>data.type === currentRoom)[0]
  console.log(currentFees)
  return (
    <div className="">
      <div className="flex flex-col justify-around mx-4 gap-4 md:flex-row">
        <div>
          <div className="text-xl font-semibold ">Book Appointment</div>
          <div className="text-gray-400">Select your consultation type</div>
          <div className="text-green-600 text-sm font-bold">
            Fees approx ₹ {currentFees.fees}
            <div className="text-blue-500">(pay at clinic)</div>
          </div>
        </div>
        <div className="text-4xl flex gap-6 justify-center">
          <div
            className={`border pt-5 px-6 pb-2 bg-green-100 flex flex-col items-center gap-2 transition-colors ease-out  rounded-xl active:bg-green-200 ${
              currentRoom === "In Clinic" ? " bg-green-700 text-white  " : ""
            }`}
            onClick={() => handleRoomChange({ room: "In Clinic" })}
          >
            <MdAddHome />
            <div className="text-sm">Clinic</div>
          </div>
          <div
            className={`border pt-5 px-6 pb-2 bg-green-100 flex flex-col items-center gap-2 rounded-xl active:bg-green-200 ${
              currentRoom == "Audio" ? "bg-green-700 text-white " : ""
            }`}
            onClick={() => handleRoomChange({ room: "Audio" })}
          >
            <MdCall />
            <div className="text-sm">Audio</div>
          </div>
          <div
            className={`border pt-5 px-6 pb-2 bg-green-100 flex flex-col items-center gap-2 rounded-xl active:bg-green-200 ${
              currentRoom == "Video" ? "bg-green-700 text-white " : ""
            }`}
            onClick={() => handleRoomChange({ room: "Video" })}
          >
            <IoVideocam />
            <div className="text-sm">Video</div>
          </div>
        </div>
      </div>
      <div className="mx-4">
        <Calender />
      </div>
    </div>
  );
};

export default BookAppointment;
