import React from "react";
import { LiaHospitalSolid } from "react-icons/lia";

const Header = () => {
  return (
    <div className="bg-white  border flex justify-between items-center px-8 py-2 w-screen shadow-md sticky top-30">
      <div className="text-4xl text-white bg-red-400 p-1 rounded-full">
        <LiaHospitalSolid />
      </div>
      <div className="cursor-pointer border p-2 px-3 rounded active:text-blue-700 hover:bg-slate-200 text-blue-500">
        Need Help?
      </div>

    </div>
  );
};

export default Header;
