import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { PrivateRoute } from './PrivateRoute';

const Login = lazy(() => import('../pages/auth/Login'));
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));
const UserList = lazy(() => import('../pages/users/UserList'));
const ProductList = lazy(() => import('../pages/products/ProductList'));
const InventoryIn = lazy(() => import('../pages/inventory/InventoryIn'));
const Reports = lazy(() => import('../pages/reports/Reports'));

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/inventory" element={<InventoryIn />} />
          <Route path="/reports" element={<Reports />} />
        </Route>
      </Route>

      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}