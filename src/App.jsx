import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { ImAddressBook } from 'react-icons/im';

import AppBar from './pages/AppBar';
import RegisterView from './pages/RegisterView';
import LoginView from './pages/LoginView';
import PhonebookView from './pages/PhonebookView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route
          index
          element={<ImAddressBook size={400} fill="#64b5f6" opacity={0.8} />}
        />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<PhonebookView />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
