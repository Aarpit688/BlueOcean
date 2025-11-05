// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './views/Home';
import About from './views/About';
import Brands from './views/Brands';
import Brand1 from './views/Brand1';
import Brand2 from './views/Brand2';
import Contact from './views/Contact';
import { ThemeProvider } from './contexts/ThemeContext';
import { useTheme } from './contexts/ThemeContext';
import MotionSection from './MotionSection';

const ThemedApp = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
  className={`min-h-screen overflow-x-hidden overflow-y-hidden ${
    isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
  }`}
>
  <Router>
    <Header />
    <Routes>
      <Route
        path="/"
        element={
          <MotionSection>
            <Home />
          </MotionSection>
        }
      />
      <Route
        path="/about"
        element={
          <MotionSection>
            <About />
          </MotionSection>
        }
      />
      <Route
        path="/brands"
        element={
          <MotionSection>
            <Brands />
          </MotionSection>
        }
      />
      <Route
        path="/brand1"
        element={
          <MotionSection>
            <Brand1 />
          </MotionSection>
        }
      />
      <Route
        path="/brand2"
        element={
          <MotionSection>
            <Brand2 />
          </MotionSection>
        }
      />
      <Route
        path="/contact"
        element={
          <MotionSection>
            <Contact />
          </MotionSection>
        }
      />
    </Routes>
    <Footer />
  </Router>
</div>

  );
};

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;
