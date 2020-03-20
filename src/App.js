import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Containers/Navbar';
import ProfilePage from './Containers/ProfilePage';
import Footer from './Containers/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/:handle" component={ProfilePage} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
