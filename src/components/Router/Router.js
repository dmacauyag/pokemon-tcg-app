import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from '../../pages/HomePage';
import { SetsPage } from '../../pages/SetsPage';

import { BottomNavigation } from '../BottomNavigation';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sets" element={<SetsPage />} />
      </Routes>
      <BottomNavigation />
    </BrowserRouter>
  );
}
