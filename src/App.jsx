import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cronicas from './pages/Cronicas';
import Charles from './pages/Charles';
import Tienda from './pages/Tienda';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cronicas" element={<Cronicas />} />
          <Route path="/charles" element={<Charles />} />
          <Route path="/tienda" element={<Tienda />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
