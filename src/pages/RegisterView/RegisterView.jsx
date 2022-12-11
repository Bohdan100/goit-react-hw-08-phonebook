import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/authorization';
import { RegisterForm, RegisterLabel } from './RegisterView.styled';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница регистрации</h1>

      <RegisterForm onSubmit={handleSubmit} autoComplete="off">
        <RegisterLabel>
          Имя
          <input type="text" name="name" value={name} onChange={handleChange} />
        </RegisterLabel>

        <RegisterLabel>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </RegisterLabel>

        <RegisterLabel>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </RegisterLabel>

        <button type="submit">Зарегистрироваться</button>
      </RegisterForm>
    </div>
  );
};

export default RegisterView;
