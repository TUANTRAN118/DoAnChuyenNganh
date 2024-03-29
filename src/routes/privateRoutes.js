// Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GioiThieu from '../views/PublicView/gioiThieu/viewGioiThieu';
import TinTuc from '../views/PublicView/tinTuc/viewTinTuc';

const PrivateRoutes = () => (
  <Routes>
    <Route path="/gioi-thieu" element={<GioiThieu />} />
    <Route path="/tin-tuc" element={<TinTuc />} />
  </Routes>
);

export default PrivateRoutes;
