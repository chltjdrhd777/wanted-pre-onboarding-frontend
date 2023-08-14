import styled from '@emotion/styled';
import { useState } from 'react';
import AuthInput from '../components/Molecule/AuthInput';
import { css } from '@emotion/react';

function useAuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailVaidator = (email: string) => email.includes('@');
  const passwordValidator = (password: string) => password.length >= 8;
  const isFilled = emailVaidator(email) && passwordValidator(password);

  const Comp = (
    <InputBox>
      <AuthInput
        data-testid="email-input"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="email"
        additionalCSS={additionalCSS}
      />
      <AuthInput
        data-testid="password-input"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
        additionalCSS={additionalCSS}
      />
    </InputBox>
  );

  return {
    Comp,
    email,
    password,
    isFilled,
  };
}

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const additionalCSS = css`
  padding: 1.5rem;
  font-size: 1.7rem;
`;

export default useAuthForm;
