import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './templates/Dark.css';
import './App.css';
import HomePage from './views/HomePage';
import Login from './views/Login';
import Register from './views/Register';
import Formulario from './views/Formulario'

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/*" element={<HomePage/>} />
              <Route path="/login" exact element={<Login/>} />
              <Route path="/Formulario" element={<Register />} />
              <Route path="/register" element={<Formulario />} />
              <Route path="*" element={<Error404 />} />
          </Routes>
      </BrowserRouter>

     
  );
}

function Error404(){
    return (
        <div><p>Página no encontrada</p></div>
    );
}

export default App;
