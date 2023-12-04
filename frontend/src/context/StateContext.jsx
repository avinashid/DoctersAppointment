import { createContext, useState } from "react";

export const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [currentRoom, setCurrentRoom] = useState("clinic");
  const [currentDate, setCurrentDate] = useState(0);
  const [currentTime, setCurrentTime] = useState(-1);

  return (
    <stateContext.Provider
      value={{
        currentRoom,
        setCurrentRoom,
        currentTime,
        setCurrentTime,
        currentDate,
        setCurrentDate,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};
