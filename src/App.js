import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Farms from './components/Farms';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './components/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
         <Route path="about" element={<About />} /> 
          <Route path="farms" element={<Farms />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
