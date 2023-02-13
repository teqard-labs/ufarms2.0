import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Farms from './components/Farms';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route path="about" element={<About />} />
        </Route>
         <Route path="/" >
          <Route path="farms" element={<Farms />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
