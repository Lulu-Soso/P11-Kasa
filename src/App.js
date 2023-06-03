import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PreLoader from './components/PreLoader';

const App = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Opérations de chargement ici
    const simulateLoading = async () => {
      // Simule le chargement pendant un certain délai
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Marque le contenu comme chargé
      setContentLoaded(true);
    };

    simulateLoading();

    // Nettoyage de l'effet
    return () => {
      // Effectuer ici les opérations de nettoyage si nécessaire
    };
  }, []);

  // Composants de page chargés dynamiquement
  const HomePage = React.lazy(() => import('./pages/Home-Page'));
  const AboutPage = React.lazy(() => import('./pages/About-Page'));
  const AccommodationPage = React.lazy(() => import('./pages/Accommodation-Page'));
  const NotFoundPage = React.lazy(() => import('./pages/NotFound-Page'));

  return (
      <BrowserRouter>
        {!contentLoaded && <PreLoader />}
        <React.Suspense fallback={<PreLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/accommodation/:id" element={<AccommodationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
  );
};

export default App;
