import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PreLoader from './components/PreLoader';

const App = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const simulateLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setContentLoaded(true);
    };

    simulateLoading();

    // Nettoyage de l'effet
    return () => {
    };
  }, []);

  // Composants de page chargés dynamiquement
  const HomePage = React.lazy(() => import('./pages/Home-Page'));
  const AboutPage = React.lazy(() => import('./pages/About-Page'));
  const AccommodationPage = React.lazy(() => import('./pages/Accommodation-Page'));
  const NotFoundPage = React.lazy(() => import('./pages/NotFound-Page'));

  return (
      <BrowserRouter>
        {!contentLoaded && <PreLoader/>}
        <React.Suspense fallback={<PreLoader/>}>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/accommodation/:id" element={<AccommodationPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </React.Suspense>
      </BrowserRouter>
  );
};

export default App;
