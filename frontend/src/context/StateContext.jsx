import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [currentRoom, setCurrentRoom] = useState("In Clinic");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(-1);
  const [refresh, setRefresh] = useState(false);
  const [doctor, setDoctor] = useState(false);
  const [slots, setSlots] = useState([]);
  const [fees, setFees] = useState([]);
  useEffect(() => {
    const data = async () => {
      try {
        const doc = await axios.get("https://doctors-appointment-54uq.onrender.com/api/doctors");
        const slots = await axios.post(
          "https://doctors-appointment-54uq.onrender.com/api/doctors/getSlots",
          {
            doctor: "Dr. Manik Dalvi",
          }
        );
        const fees = await axios.post(
          "https://doctors-appointment-54uq.onrender.com/api/doctors/fees",
          {
            doctor: "Dr. Manik Dalvi",
          }
        );
        setDoctor(doc.data);
        setSlots(slots.data);
        setFees(fees.data);
      } catch (error) {
        console.log(error);
      }
    };
    data();
    return data;
  }, [refresh]);
  return (
    <stateContext.Provider
      value={{
        currentRoom,
        setCurrentRoom,
        currentTime,
        setCurrentTime,
        currentDate,
        setCurrentDate,
        doctor,
        slots,
        fees,
        setRefresh,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};
