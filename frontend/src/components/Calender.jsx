import { useRef, useContext } from "react";
import { format, isToday, isTomorrow } from "date-fns";
import { FaCircleRight } from "react-icons/fa6";
import { FaCircleLeft } from "react-icons/fa6";
import { stateContext } from "../context/StateContext";
import Slots from "./Slots";

const Calender = () => {
  const { currentDate, setCurrentDate, setCurrentTime } =
    useContext(stateContext);

  const startDateCopy = new Date();
  const dates = [new Date()];
  for (let i = 0; i < 30; i++) {
    dates.push(new Date(startDateCopy.setDate(startDateCopy.getDate() + 1)));
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

  const containerRef = useRef(null);
  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 250;
    }
  };
  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 250;
    }
  };

  const handleSelectDate = ({ date }) => {
    setCurrentDate(date);
    setCurrentTime(-1);
  };

  return (
    <div className="">
      <div className="flex items-center  justify-between mb-4 relative mt-8">
        <button
          className="  text-black text-3xl font-bold absolute left-[-6px] md:left-6 bg-green-200 rounded-full  "
          onClick={handleScrollLeft}
        >
          <FaCircleLeft />
        </button>
        <div
          className="flex gap-2 overflow-auto l snap-x scroll-smooth scroll w-11/12 m-auto"
          ref={containerRef}
        >
          {dates.map((date, index) => (
            <div
              key={index}
              className={`flex-1 text-center self-center w-50 cursor-pointer bg-gray-200 p-2 transition-colors ease-in-out rounded font-semibold  snap-center ${
                currentDate.getDay() == date.getDay() &&
                "border-blue-600 border-b-4 text-black bg-blue-100 font-bold"
              }`}
              style={{ minWidth: "33.3%" }}
              onClick={() => handleSelectDate({ date })}
            >
              {formatDateLabel(date)}
            </div>
          ))}
        </div>
        <button
          className="  text-black text-3xl font-bold right-[-6px] md:right-6  absolute bg-green-200 rounded-full  "
          onClick={handleScrollRight}
        >
          <FaCircleRight />
        </button>
      </div>
      <Slots />
    </div>
  );
};

export default Calender;
