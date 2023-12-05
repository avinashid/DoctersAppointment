import { useContext, useEffect, useState } from "react";
import { stateContext } from "../context/StateContext";
import Profile from "../components/Profile";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { SlClock } from "react-icons/sl";
import axios from "axios";

import { SlCalender } from "react-icons/sl";

const Consultation = () => {
  const navigate = useNavigate();
  const { currentRoom, currentTime, currentDate,setRefresh } = useContext(stateContext);
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async () => {
    setError("");
    if (number.length !== 10) setError("Invalid Number");
    else {
      console.log(currentDate, currentTime, currentRoom);
      try {
        const data = await axios.post(
          "http://localhost:5000/api/doctors/slots",
          {
            doctor: "Dr. Manik Dalvi",
            time: currentTime,
            date: currentDate.toLocaleDateString(),
            type: currentRoom,
          }
        );
        console.log(data.data);
        window.alert("Success! You may get a confirmation call !");
        navigate("/");
        setRefresh(true)
      } catch (error) {
        window.alert("Something Went Wrong");
        console.log(error.message);
      }
    }
  };

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
              {currentRoom === "In Clinic" && "(pay at clinic)"}
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
      <div className="font-semibold mx-8  underline text-blue-600 text-md">
        Change date & time
      </div>
      <br />
      <div className="flex border flex-col mx-8 gap-4 border-gray-600 py-6 px-8 rounded-md">
        <div className="font-semibold text-lg">
          Enter your phone number to continue
        </div>
        <div className="text-sm font-semibold">
          Please enter your WhatsApp number to receive timely updates.
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm text-gray-600">Enter your number *</div>
          <input
            className="border rounded-lg px-4 w-fit py-2"
            type="number"
            name=""
            id=""
            placeholder="Mobile Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="text-xs text-red-600">{error}</div>
        <div className="max-w-[210px] text-xs text-gray-600">
          Please enter the mobile number of the patient. You will receive a
          confirmation message on this number.
        </div>
        <div className="self-end">
          <button
            className={` rounded-md font-semibold text-white p-2 px-4 ${
              number.length === 10
                ? "active:bg-green-700 bg-green-600 "
                : "bg-gray-400"
            }`}
            onClick={handleSubmit}
          >
            Send Confirmation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
