import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Reglement from './pages/Reglement';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/reglement" element={<Reglement />} />
    </Routes>
  );
}