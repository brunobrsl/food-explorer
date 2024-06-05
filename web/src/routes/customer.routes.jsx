import { Routes, Route, Navigate } from 'react-router-dom';

import { Favorites } from '../pages/Favorites';
import { Product } from '../pages/Product';
import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorites />} />

      <Route path="*" element={<Navigate to="/" />} /> 
    </Routes>
  );
}