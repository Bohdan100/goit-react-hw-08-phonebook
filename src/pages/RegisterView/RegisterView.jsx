import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/authorization';
import {
  RegisterTitle,
  RegisterText,
  RegisterForm,
  RegisterLabel,
  RegisterInput,
  RegisterButton,
  InputTextWrapper,
  InputTextIcon,
} from './RegisterView.styled';

import { ImEye, ImEyeBlocked, ImUserPlus } from 'react-icons/im';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // input-password
  const [toggleIcon, setToggleIcon] = useState(<ImEye />);
  const [type, setType] = useState('password');

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
      <RegisterTitle>Create your account</RegisterTitle>

      <RegisterText>Create a name, email and password</RegisterText>

      <RegisterForm onSubmit={handleSubmit} autoComplete="off">
        <RegisterLabel>
          Name:
          <RegisterInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter your name"
            minlength="3"
            maxlength="20"
            required
          />
        </RegisterLabel>

        <RegisterLabel>
          E-mail:
          <RegisterInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your mail"
            minlength="3"
            maxlength="20"
            required
          />
        </RegisterLabel>

        <RegisterLabel>
          <InputTextWrapper>
            <span>Password (7 characters minimum):</span>
            <InputTextIcon onClick={togglePassInput}>
              {toggleIcon}
            </InputTextIcon>
          </InputTextWrapper>

          <RegisterInput
            type={type}
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter your password"
            minlength="7"
            maxlength="15"
            required
          />
        </RegisterLabel>

        <RegisterButton type="submit">
          Sign up <ImUserPlus size={16} />
        </RegisterButton>
      </RegisterForm>
    </div>
  );
};

export default RegisterView;
