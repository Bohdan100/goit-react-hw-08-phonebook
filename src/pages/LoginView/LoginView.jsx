import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/authorization';
import { ImEye, ImEyeBlocked, ImRedo2 } from 'react-icons/im';

import {
  LoginTitle,
  LoginText,
  LoginForm,
  LoginLabel,
  LoginInput,
  InputTextWrapper,
  InputTextIcon,
  LoginButton,
} from './LoginView.styled';

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // input-password
  const [toggleIcon, setToggleIcon] = useState(<ImEye />);
  const [type, setType] = useState('password');

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

  // input-password
  const togglePassInput = e => {
    if (type === 'password') {
      setType('text');
      setToggleIcon(<ImEyeBlocked />);
    } else {
      setType('password');
      setToggleIcon(<ImEye />);
    }
  };

  return (
    <div>
      <LoginTitle>Please log in to your account</LoginTitle>
      <LoginText>Enter your e-mail address and password</LoginText>

      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <LoginLabel>
          E-mail
          <LoginInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your mail"
          />
        </LoginLabel>

        <LoginLabel>
          <InputTextWrapper>
            <span>Password:</span>
            <InputTextIcon onClick={togglePassInput}>
              {toggleIcon}
            </InputTextIcon>
          </InputTextWrapper>

          <LoginInput
            type={type}
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </LoginLabel>

        <LoginButton type="submit">
          Continue <ImRedo2 size={16} />
        </LoginButton>
      </LoginForm>
    </div>
  );
};

export default LoginView;
