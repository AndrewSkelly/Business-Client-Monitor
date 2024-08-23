import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import ClientList from './views/ClientList';
import Analytics from './views/Analytics';
import './App.scss'
// import Container from './components/Container';

const App: React.FC = () => {
  return (
    <div className='container'>   
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client-log" element={<ClientList />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
    
    </div>
  );
};

export default App
