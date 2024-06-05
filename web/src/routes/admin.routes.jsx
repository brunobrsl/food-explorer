import { Routes, Route, Navigate } from 'react-router-dom';

import { AddProduct } from '../pages/AddProduct';
import { EditProduct } from '../pages/EditProduct';
import { Product } from '../pages/Product';
import { Home } from '../pages/Home';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/products/edit/:id" element={<EditProduct />} />
      <Route path="/products/:id" element={<Product />} />

      <Route path="*" element={<Navigate to="/" />} /> 
    </Routes>
  );
}