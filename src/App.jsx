import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from './pages/SignUp/SignUpPage';


function App() {
  return (
    <div>
      <BrowserRouter>
      <CustomNavbar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/home" element={<LandingPage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
