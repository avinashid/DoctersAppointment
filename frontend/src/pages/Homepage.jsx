import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <Outlet />
    </div>
  );
};

export default Homepage;
