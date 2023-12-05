import Header from "../components/Header";
import Profile from "../components/Profile";
import BookAppointment from "../components/BookAppointment";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <Profile />
      <BookAppointment />
    </div>
  );
};

export default Dashboard;
