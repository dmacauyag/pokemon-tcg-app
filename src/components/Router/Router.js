import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from '../../pages/HomePage';
import { SetsPage } from '../../pages/SetsPage';

import { BottomNavigation } from '../BottomNavigation';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sets" element={<SetsPage />} />
    </Routes>
    <BottomNavigation />
  </BrowserRouter>
);

export default Router;
