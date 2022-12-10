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
import { useGlobalContext } from "./utils/ContextProvider";




function App() {
  const {state} = useGlobalContext()
  return (
    <>      
      <BrowserRouter>
      {state && <CustomNavbar />}
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login/:id" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/home" element={<LandingPage/>}/>

        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
