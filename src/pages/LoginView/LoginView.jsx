import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/authorization';

import { LoginForm, LoginLabel } from './LoginView.styled';

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница логина</h1>

      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <LoginLabel>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </LoginLabel>

        <LoginLabel>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </LoginLabel>

        <button type="submit">Войти</button>
      </LoginForm>
    </div>
  );
};

export default LoginView;
