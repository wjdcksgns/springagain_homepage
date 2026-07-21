import { useCallback, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setViewport } from './features/common/viewportSlice';

import './common/css/App.css';
import { setVh } from './common/js/ui';

import Header from './components/common/Layout/Header';
import Footer from './components/common/Layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

import Main from './pages/Main/Main';
import About from './pages/About';
import Business from './pages/Business';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import NotFound from './pages/NotFound/NotFound';
import FloatingContactButton from './components/FloatingContactButton';

const App = () => {
  const dispatch = useDispatch();
  const { windowHeight } = useSelector((state) => state.viewport);

  const handleResize = useCallback(() => {
    dispatch(setViewport({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    }));
  }, [dispatch]);

  setVh(windowHeight);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <div id="app">
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/platforms" element={<Navigate to="/business" replace />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContactButton />
    </div>
  );
}

export default App;
