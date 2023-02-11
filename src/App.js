import logo from './logo.svg';
import './App.css';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
