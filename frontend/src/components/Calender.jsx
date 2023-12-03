import React, { useState } from "react";
import { format, addDays, isToday, isTomorrow } from "date-fns";

const Calender = () => {
  const startDateCopy = new Date();

  const dates = [];
  for (let i = 0; i < 30; i++) {
    dates.push(new Date(startDateCopy.setDate(startDateCopy.getDate() + i)));
  }
  const formatDateLabel = (date) => {
    if (isToday(date)) {
      return "Today";
    } else if (isTomorrow(date)) {
      return "Tomorrow";
    } else {
      return format(date, "EEE, dd");
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Left
        </button>
        <div className="flex gap-3 w-screen overflow-hidden">
          {dates.map((date, index) => (
            <div
              key={index}
              className=" text-center w-50 bg-gray-200 p-2 rounded hover:bg-gray-300"
              style={{ minWidth: "33%" }}
            >
              {formatDateLabel(date)}
            </div>
          ))}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Right
        </button>
      </div>
    </div>
  );
};

export default Calender;
