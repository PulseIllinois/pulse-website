import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Events from "./components/Events";
import Sponsors from "./components/Sponsors";
import OurTeam from "./components/OurTeam";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import './App.css';


function App() {
  return (
    <Router>
      <div className="container">
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sponsors' element={<Sponsors />} />
            <Route path='/events' element={<Events />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            
          </Routes>

        
      </div>
    </Router>
  );
}

export default App;
