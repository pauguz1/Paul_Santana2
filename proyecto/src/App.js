import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//importamos las paginas
import HomePage from './pages/HomePage/HomePage';
import IndexPage from './pages/IndexPage/IndexPage';
import DevPage from './pages/DevPage/DevPage';
import IotPage from './pages/IotPage/IotPage';
import FotoPage from './pages/FotoPage/FotoPage';
import GymPage from './pages/GymPage/GymPage';

//importamos los componentes
import Navbar from './components/Navbar/Navbar';
import NavbarBottom from './components/NavbarBottom/NavbarBottom';
import './index.css';

import './fuentes/fuentesStaatlices.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/dev" element={<DevPage />} />
          <Route path="/iot" element={<IotPage />} />

          <Route path="/foto" element={<FotoPage />} />
          <Route path="/gym" element={<GymPage />} />
        </Routes>
        <NavbarBottom />
      </div>
    </Router>
  );
}

export default App;
