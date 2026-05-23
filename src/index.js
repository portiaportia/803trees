import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from "./Layout";
import Home from "./pages/Home";

const basename = "/803tree";

const App = () => {
  return (
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path = "/" element = {<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
