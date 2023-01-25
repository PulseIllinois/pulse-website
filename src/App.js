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
import './App.css';


function App() {
  return (
    <Router>
      <div className="container">
          <Navbar />

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/sponsors' element={<Sponsors />} />
            <Route path='/events' element={<Events />} />
            <Route path="/our-team" element={<OurTeam />} />
          </Routes>

        
      </div>
    </Router>
  );
}

export default App;
