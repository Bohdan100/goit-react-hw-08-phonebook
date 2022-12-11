import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/authorization';

import {
  LoginTitle,
  LoginText,
  LoginForm,
  LoginLabel,
  LoginButton,
} from './LoginView.styled';

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
      <LoginTitle>Please log in to your account</LoginTitle>
      <LoginText>Enter your e-mail address and password</LoginText>

      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <LoginLabel>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </LoginLabel>

        <LoginLabel>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </LoginLabel>

        <LoginButton type="submit">Continue</LoginButton>
      </LoginForm>
    </div>
  );
};

export default LoginView;
