import React, { useState } from "react";

const Slots = ({ room }) => {
  const [time, setTime] = useState(-1);
  const startTime = new Date();
  const endTime = new Date();

  if (room === "clinic") {
    startTime.setHours(10, 0, 0, 0);
    endTime.setHours(11, 45, 0, 0);
  } else if (room === "phone") {
    startTime.setHours(12, 0, 0, 0);
    endTime.setHours(2, 40, 0, 0);
  } else {
    startTime.setHours(12, 0, 0, 0);
    endTime.setHours(14, 45, 0, 0);
  }

  const timeArray = [];
  const interval = room === "video" ? 20 * 60 * 1000 : 15 * 60 * 1000;

  console.log(room, startTime, endTime);

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
              index === time && "bg-green-600 text-white font-semibold"
            }`}
            onClick={() => setTime(index)}
          >
            {data}
          </div>
        ))}
      </div>
      <div
        className={`  self-end mr-10 transition-colors bg-gray-300 py-2 px-4 rounded-lg  ${
          time != -1 && "bg-green-800 text-white font-semibold"
        }`}
      >
        Continue
      </div>
    </div>
  );
};

export default Slots;
