import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import Collections from './pages/Collections';
import RecentWork from './pages/RecentWork';
import About from './pages/About';
import FAQ from './pages/FAQ';
import BookFitting from './pages/BookFitting';
import GroupOrder from './pages/GroupOrder';
import MeasurementsPage from './pages/MeasurementsPage';
import FabricGuide from './pages/FabricGuide';
import ReviewsPage from './pages/ReviewsPage';
import CustomizeFlow from './pages/CustomizeFlow';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="recent-work" element={<RecentWork />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="book" element={<BookFitting />} />
          <Route path="group-order" element={<GroupOrder />} />
          <Route path="measurements" element={<MeasurementsPage />} />
          <Route path="fabric-guide" element={<FabricGuide />} />
          <Route path="reviews" element={<ReviewsPage />} />
          
          {/* Removed dead routes */}
        </Route>
        <Route path="customize/:id" element={<CustomizeFlow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
