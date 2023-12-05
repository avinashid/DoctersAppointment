import { useContext } from "react";
import { stateContext } from "../context/StateContext";
import { useNavigate } from "react-router-dom";

const Slots = () => {
  const navigate = useNavigate();
  const startTime = new Date();
  const endTime = new Date();
  const { currentRoom, currentTime, setCurrentTime } = useContext(stateContext);

  if (currentRoom === "clinic") {
    startTime.setHours(10, 0, 0, 0);
    endTime.setHours(11, 45, 0, 0);
  } else if (currentRoom === "phone") {
    startTime.setHours(12, 0, 0, 0);
    endTime.setHours(2, 40, 0, 0);
  } else {
    startTime.setHours(12, 0, 0, 0);
    endTime.setHours(14, 45, 0, 0);
  }

  const timeArray = [];
  const interval = currentRoom === "video" ? 20 * 60 * 1000 : 15 * 60 * 1000;

  for (
    let currentTime = startTime;
    currentTime <= endTime;
    currentTime.setTime(currentTime.getTime() + interval)
  ) {
    const formattedTime = currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    timeArray.push(formattedTime.toUpperCase());
  }
  console.log(timeArray);
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 snap-center gap-4 m-6">
        {timeArray.map((data, index) => (
          <div
            key={index}
            className={`border text-center p-2 rounded-lg transition-colors ${
              data === currentTime && "bg-green-600 text-white font-semibold"
            }`}
            onClick={() => setCurrentTime(data)}
          >
            {data}
          </div>
        ))}
      </div>
      <div
        className={`  self-end mr-5 transition-colors bg-gray-300 py-2 px-8 rounded-lg  ${
          currentTime != -1 &&
          "bg-green-800 text-white font-semibold cursor-pointer"
        }`}
        onClick={() => currentTime != -1 && navigate("/consultation")}
      >
        Continue
      </div>
    </div>
  );
};

export default Slots;
