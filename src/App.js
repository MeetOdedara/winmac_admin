import "./App.css";
import DashBoard from "./DashBoard/DashBoard";
import Events from "./Events/Events";
import Complaints  from "./Complaints/Complaints";
import Navbar from "./Navbar";
import Attendance from "./Attendance/Attendance";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    {/* <SignUp /> */}
    {/* <Login /> */}
      <Navbar />
      <Routes>
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Complaints" element={<Complaints />} />
        <Route path="/Attendance" element={<Attendance />} />
      </Routes>
    </>
  );
}

export default App;