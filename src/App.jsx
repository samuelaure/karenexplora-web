import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cronicas from './pages/Cronicas';
import Charles from './pages/Charles';

import Tienda from './pages/Tienda';
import Libro from './pages/Libro';
import Bio from './pages/Bio';
import Supervivencia from './pages/Supervivencia';
import SupervivenciaGracias from './pages/SupervivenciaGracias';
import FloatingPopup from './components/FloatingPopup';
import TopBar from './components/TopBar';

const App = () => {
  const location = useLocation();
  const [topBarHeight, setTopBarHeight] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(90); // Default approx height to prevent jump


  return (
    <div className="app" style={{
      '--navbar-top': `${topBarHeight}px`,
      '--navbar-height': `${navbarHeight}px`
    }}>
      <TopBar onHeightChange={setTopBarHeight} />
      <Navbar onHeightChange={setNavbarHeight} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cronicas" element={<Cronicas />} />
          <Route path="/charles" element={<Charles />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/libro" element={<Libro />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/supervivencia" element={<Supervivencia />} />
          <Route path="/supervivencia/gracias" element={<SupervivenciaGracias />} />
        </Routes>
      </main>
      <FloatingPopup key={location.key} />
      <Footer />
    </div>
  );
};

export default App;
