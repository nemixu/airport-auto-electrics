import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CarAlarms from './pages/CarAlarms';
import DashCams from './pages/DashCams';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/car-alarms" element={<CarAlarms />} />
          <Route path="/dash-cams" element={<DashCams />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
