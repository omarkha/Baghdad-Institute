import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import TopNavBar from "./components/TopNavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeSoftware from "./pages/projectmanagement/EmployeeSoftware";
import EmployeeMarketing from "./pages/projectmanagement/EmployeeMarketing";
import EmployeeEntrepreneur from "./pages/projectmanagement/EmployeeEntrepreneur";
import EmployeeWriter from "./pages/projectmanagement/EmployeeWriter";
import EmployeeDirector from "./pages/projectmanagement/EmployeeDirector";
import EmployeeUX from "./pages/projectmanagement/EmployeeUX";
import EmployeeGraphics from "./pages/projectmanagement/EmployeeGraphics";
import BusinessPlan from "./pages/projectmanagement/BusinessPlan";
import EmployeeAppDeveloper from "./pages/projectmanagement/EmployeeAppDeveloper";
import CareersPage from "./pages/CareersPage";
import EmployeeProjectManager from "./pages/projectmanagement/EmployeeProjectManager";
import EmployeeInstructionalDesigner from "./pages/projectmanagement/EmployeeInstructionalDesigner";
function App() {
  return (
    <Router>
      <div className="App">
        <TopNavBar />
        <NavBar />
        <Routes>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<EmployeeSoftware />} path="/employee-software" />
          <Route
            element={<EmployeeEntrepreneur />}
            path="/employee-entrepreneur"
          />
          <Route element={<EmployeeMarketing />} path="/employee-marketer" />
          <Route element={<EmployeeWriter />} path="/employee-writer" />
          <Route element={<EmployeeDirector />} path="/employee-director" />
          <Route element={<EmployeeUX />} path="/employee-ux" />
          <Route element={<EmployeeGraphics />} path="/employee-graphics" />
          <Route element={<EmployeeAppDeveloper />} path="/employee-appdev" />
          <Route
            element={<EmployeeProjectManager />}
            path="/employee-manager"
          />
          <Route
            element={<EmployeeInstructionalDesigner />}
            path="/employee-instructional"
          />
          <Route element={<BusinessPlan />} path="/business-plan" />
          <Route element={<CareersPage />} path="/careers" />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
