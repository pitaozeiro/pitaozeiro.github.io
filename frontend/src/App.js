import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
