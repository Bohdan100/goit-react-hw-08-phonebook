import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { ImAddressBook } from 'react-icons/im';

import { authOperations, authSelectors } from 'redux/authorization';
import AppBar from './pages/AppBar';
import RegisterView from './pages/RegisterView';
import LoginView from './pages/LoginView';
import PhonebookView from './pages/PhonebookView';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { PrivateRoute } from 'components/Routes/PrivateRoute';



export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route
          index
          element={<ImAddressBook size={400} fill="#64b5f6" opacity={0.8} />}
        />
        <Route path="/register" element={<RestrictedRoute component={RegisterView} redirectTo='/contacts'/>} />
        <Route path="/login" element={<RestrictedRoute component={LoginView} redirectTo='/contacts'/>} />
        <Route path="/contacts" element={<PrivateRoute component={PhonebookView} redirectTo='/login'/>} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
