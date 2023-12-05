import React from "react";
import Header from "../components/Header";
import { FaUserMd } from "react-icons/fa";
import { FaCalendarTimes } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const formatDate = (date) => {
    const time = date.toLocaleTimeString().split(":");
    const formatTime = `${
      new Date().getDay() == date.getDay() ? "Today, " : "Tomorrow, "
    }${time[0]}:${time[1]} ${time[2].slice(-3).toUpperCase()}`;
    return formatTime;
  };
  const navigate = useNavigate();
  const availableDate = () => {
    const dateNow = new Date();
    const start = new Date();
    start.setHours(10, 15, 0, 0);
    const end = new Date();
    end.setHours(14, 40, 0, 0);
    const tomorrow = new Date();
    tomorrow.setDate(dateNow.getDate() + 1);
    tomorrow.setHours(10, 15, 0, 0);
    if (dateNow < start) return start;
    if (dateNow > end) return tomorrow;
    var minutes = dateNow.getMinutes();
    var remainder = minutes % 10;
    dateNow.setMinutes(
      minutes + (remainder >= 5 ? 10 - remainder : -remainder)
    );
    return dateNow;
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col gap-8 items-center md:flex-row justify-around p-4 md:p-20">
        <div className="flex flex-col gap-2 items-center">
          <div className="text-8xl text-green-600 border-4 shadow-lg border-green-600  bg-green-200 rounded-full p-6 w-fit">
            <FaUserMd />
          </div>
          <div className="text-2xl font-semibold">Dr. Manik Dalvi</div>
          <div className="text-md text-gray-700">Obstetrics & Gynecology</div>
          <div className="text-md text-gray-700">MBBS,MS</div>
          <div>
            <button
              className="border px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700"
              onClick={() => navigate("/")}
            >
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <div className="text-2xl md:text-4xl font-bold">
            Book a Clinic Appointment
          </div>
          <div className="shadow-xl  gap-4 max-w-sm rounded-md text-green-600 flex flex-col justify-center py-4 px-7">
            <div className="inline-flex gap-2 items-center">
              <FaCalendarTimes />
              <span className="text-black">Next available at</span>
              {formatDate(availableDate())}
            </div>
            <div className="flex gap-2">
              <div>
                <FaLocationArrow />
              </div>
              <div className="text-gray-500 self-center">
                Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre, Opp.
                Bopal Nagar, Maharashtra, 421302
              </div>
            </div>
            <hr />
            <div className="text-green-600 flex flex-col items-center">
              <div className="text-2xl font-semibold">Book Clinic Visit</div>
              <div className="text-sm">No Booking Fees</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
