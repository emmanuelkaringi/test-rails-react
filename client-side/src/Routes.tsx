import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import MyThoughts from './pages/MyThoughts';
import Favourites from './pages/Favourites';
import AddMyThought from './pages/AddMyThought';
import AboutApp from './pages/AboutApp';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

const AppRoutes: React.FC = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/my-thoughts" element={<MyThoughts />} />
          <Route path="/add-my-thought" element={<AddMyThought />} />
          <Route path="/about" element={<AboutApp />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
  );
};

export default AppRoutes;