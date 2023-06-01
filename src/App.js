import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home-Page';
import AboutPage from './pages/About-Page';
import AccommodationPage from './pages/Accommodation-Page';
import NotFoundPage from './pages/NotFound-Page';
import PreLoader from './components/PreLoader';
const App = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {

    const loadingTimeout = setTimeout(() => {
      // Après le chargement, marquez le contenu comme chargé
      setContentLoaded(true);
    }, 1000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
      <BrowserRouter>
        {!contentLoaded && <PreLoader />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/accommodation/:id" element={<AccommodationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </BrowserRouter>
  );
};

export default App;
