import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/authorization';
import {
  RegisterTitle,
  RegisterText,
  RegisterForm,
  RegisterLabel,
  RegisterButton,
} from './RegisterView.styled';

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
      <RegisterTitle>Create your account</RegisterTitle>

      <RegisterText>Create a name, email and password</RegisterText>

      <RegisterForm onSubmit={handleSubmit} autoComplete="off">
        <RegisterLabel>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </RegisterLabel>

        <RegisterLabel>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </RegisterLabel>

        <RegisterLabel>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </RegisterLabel>

        <RegisterButton type="submit">Sign up</RegisterButton>
      </RegisterForm>
    </div>
  );
};

export default RegisterView;
