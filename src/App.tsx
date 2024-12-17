// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProgramPage from './pages/ProgramPage/ProgramPage';
import Home from './pages/Home/Home';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBoostrap from './components/navbarBootstrap/NavbarBoostrap';

const App: React.FC = () => {
  return (
    <Router>
      <NavbarBoostrap/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/programa/:programID" element={<ProgramPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;