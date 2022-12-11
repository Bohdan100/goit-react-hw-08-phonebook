import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import AppBar from './pages/AppBar';
import RegisterView from './pages/RegisterView';
import LoginView from './pages/LoginView';
import PhonebookView from './pages/PhonebookView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<PhonebookView />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
