import { FaUserMd } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="flex px-6 pb-5 gap-8 border-b ">
      <div className="text-7xl text-green-600  bg-green-200 rounded-full p-6">
        <FaUserMd />
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-bold text-xl">Dr. Manik Dalvi</div>
        <div className="text-sm text-gray-600">Obstetrics & Gynacology</div>
        <div
          className="border px-3 py-2 font-semibold text-center mt-3 text-blue-500 rounded-md shadow-sm active:shadow-inner active:bg-blue-100"
          onClick={() => navigate("/profile")}
        >
          VIEW PROFILE
        </div>
      </div>
    </div>
  );
};

export default Profile;
