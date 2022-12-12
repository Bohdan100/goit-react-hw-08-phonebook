import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/authorization';

/**
 * Приватный маршрут, остается в маршуруте если (проверка):
 * 1. Пользователь залогинен
 * 2. У пользователя действующий токен, например
 * когда произошла перезагрузка страницы (refresh) и
 * токен сохранился
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  // вывод с маршрута если без токена и не залогинился
  const shouldRedirect = !isFetchingCurrentUser && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
