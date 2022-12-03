import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './hocs/Layout';
import Home from './components/Home';
import Beats from './components/Beats';
import Contact from './components/Contact';




function App() {
  return (
    <React.Fragment>
        <Router>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/beats" element={<Beats />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </Router>
    </React.Fragment>
  );
}

export default App;
