import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Nav from './components/Nav';
import OneAuthor from './components/OneAuthor';
import AuthorForm from './components/AuthorForm';
import UpdateAuthor from './components/UpdateAuthor';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Nav/>
        <Routes>
          <Route element={<Main/>} path="/" default />
          <Route element={<OneAuthor/>} path="/oneAuthor/:id" />
          <Route element={<UpdateAuthor/>} path="/updateAuthor/:id"/>
          <Route element={<AuthorForm/>} path="/newAuthor"/>
        </Routes>
    </div>
  );
}

export default App;