import { useContext } from "react";
import { MdAddHome } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import Calender from "./Calender";
import { stateContext } from "../context/StateContext";

const BookAppointment = () => {
  const { currentRoom, setCurrentRoom, setCurrentTime, setCurrentDate } =
    useContext(stateContext);
  const handleRoomChange = async ({ room }) => {
    setCurrentRoom(room);
    setCurrentTime(-1);
    setCurrentDate(0);
  };

  return (
    <div className="">
      <div className="flex flex-col justify-around mx-4 gap-4 md:flex-row">
        <div>
          <div className="text-xl font-semibold ">Book Appointment</div>
          <div className="text-gray-400">Select your consultation type</div>
          <div className="text-green-600 text-sm font-bold">
            Fees approx ₹ 500{" "}
            <div className="text-blue-500">(pay at clinic)</div>
          </div>
        </div>
        <div className="text-4xl flex gap-6 justify-center">
          <div
            className={`border pt-5 px-6 pb-2 bg-green-100 flex flex-col items-center gap-2 transition-colors ease-out  rounded-xl active:bg-green-200 ${
              currentRoom === "clinic" ? " bg-green-700 text-white  " : ""
            }`}
            onClick={() => handleRoomChange({ room: "clinic" })}
          >
            <MdAddHome />
            <div className="text-sm">Clinic</div>
          </div>
          <div
            className={`border pt-5 px-6 pb-2 bg-green-100 flex flex-col items-center gap-2 rounded-xl active:bg-green-200 ${
              currentRoom == "audio" ? "bg-green-700 text-white " : ""
            }`}
            onClick={() => handleRoomChange({ room: "audio" })}
          >
            <MdCall />
            <div className="text-sm">Audio</div>
          </div>
          <div
            className={`border pt-5 px-6 pb-2 bg-green-100 flex flex-col items-center gap-2 rounded-xl active:bg-green-200 ${
              currentRoom == "video" ? "bg-green-700 text-white " : ""
            }`}
            onClick={() => handleRoomChange({ room: "video" })}
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
