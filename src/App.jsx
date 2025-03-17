import React from 'react';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import PrinterOffline from './service/PrinterOffline';
import Footer from './pages/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import PrinterSetup from './service/PrinterSetupIssue';
import ScannerSetup from './service/Scannersetup';
import PrivacyPolicy from './service/PrivacyPolicy';

const App = () => {
  return (
    <>
    

    <Router>
    <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/printeroffline" element={<PrinterOffline />} />
        <Route path="/printersetupissue" element={<PrinterSetup />} />
        <Route path="/printerscannersetup" element={<ScannerSetup />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
};

export default App;
