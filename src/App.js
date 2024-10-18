import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";

// Pages
// import Home from './pages/Home';
import MiniBlog from './pages/MiniBlog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MiniBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
