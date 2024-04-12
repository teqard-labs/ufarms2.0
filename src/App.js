import './App.css';
import About from './components/About';
import Farms from './components/Farms';
import Carousel from './components/Carousel';
import Home from './components/Home';
import Contacts from './components/Contacts';
import { HashRouter, Routes, Route } from "react-router-dom";
import Products from './components/Products';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ImageViewer from './components/ImageViewer';
import News from './components/News'
import Download from './components/Download';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" >
          <Route path="" element={<Home/>}/>
         <Route path="about" element={<About />} /> 
          <Route path="farms" element={<Farms />} />
          <Route path="products" element={<Products />} />
          <Route path="carousel" element={<Carousel />} />
          <Route path="contacts" element={<Contacts/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="gallery" element={<Gallery/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="download" element={<Download/>}/>
          <Route path="/gallery/farm/:id" element={<ImageViewer/>} />
        </Route>
      </Routes>
    </HashRouter>
      
    
  );
}

export default App;
