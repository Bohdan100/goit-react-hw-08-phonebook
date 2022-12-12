import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/authorization';

/**
 * 1. Публичный ограниченный маршрут
 * 2. Перенаправляет на путь '/contacts' в redirectTo из App.jsx
 * 3. В противном случае рендерит компонент - форму регистрации (логина)
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
