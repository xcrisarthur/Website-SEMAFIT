import './Js/script'
import './Css/main.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Home from './Pages/Home';
import About from './Pages/About';
import AspirForm from "./Pages/AspirForm";
import Events from "./Pages/Events";
import Merchandise from "./Pages/Merchandise";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/AspirForm" element={<AspirForm />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Merchandise" element={<Merchandise />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
