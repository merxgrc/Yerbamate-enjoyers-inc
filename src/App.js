import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router basename="/Yerbamate-enjoyers-inc">
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
