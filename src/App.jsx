import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { ImAddressBook } from 'react-icons/im';

import { authOperations, authSelectors } from 'redux/authorization';
import AppBar from './pages/AppBar';
import RegisterView from './pages/RegisterView';
import LoginView from './pages/LoginView';
import PhonebookView from './pages/PhonebookView';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Routes>
      <PublicRoute path="/">
        <AppBar />
        <Route
          index
          element={<ImAddressBook size={400} fill="#64b5f6" opacity={0.8} />}
        />

        <PublicRoute path="/register" restricted>
          <RegisterView />
        </PublicRoute>
        <PublicRoute path="/login" restricted>
          <LoginView />
        </PublicRoute>

        <PrivateRoute path="/contacts" redirectTo="/login">
          <PhonebookView />
        </PrivateRoute>
      </PublicRoute>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
