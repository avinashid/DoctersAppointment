import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Homepage = () => {
  return (
    <div className="">
      <Header />
      <div className=" max-w-screen-lg m-auto my-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Homepage;
