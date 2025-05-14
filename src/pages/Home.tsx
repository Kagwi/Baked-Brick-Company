import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Main pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';

// Services pages
import ServicesLanding from './pages/services'; // the main services page
import AiDevelopment from './pages/services/ai-development';
import WebDevelopment from './pages/services/web-development';
import MobileDevelopment from './pages/services/mobile-development';
import DataAnalysis from './pages/services/data-analysis';
import UiUxDesign from './pages/services/ui-ux-design';
import Seo from './pages/services/seo';

function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />

      {/* Tagline and number */}
      <div style={{ backgroundColor: '#000', color: '#fff', textAlign: 'center', padding: '10px 0' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Premier Landscaping Company</div>
        <div style={{ fontSize: '1.2rem', marginTop: '5px' }}>0722381743</div>
      </div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog">
            <Route index element={<BlogPage />} />
            <Route path=":id" element={<BlogPostPage />} />
          </Route>
          <Route path="contact" element={<ContactPage />} />

          {/* Services routes */}
          <Route path="services">
            <Route index element={<ServicesLanding />} />
            <Route path="ai-development" element={<AiDevelopment />} />
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="mobile-development" element={<MobileDevelopment />} />
            <Route path="data-analysis" element={<DataAnalysis />} />
            <Route path="ui-ux-design" element={<UiUxDesign />} />
            <Route path="seo" element={<Seo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
