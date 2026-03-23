import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Department from "./pages/Department";
// import Employee from "./pages/employee";
import Vacation from "./pages/Vacation";
import Login from "./pages/Login";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/attendance" element={<Attendance/>} />
        <Route path="/department" element={<Department/>} />
        <Route path="/employee" element={<Employee/>} />
        <Route path="/vacation" element={<Vacation/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
