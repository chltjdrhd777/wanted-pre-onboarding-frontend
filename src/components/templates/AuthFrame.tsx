import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { colors, gradients } from '../../Styles/theme';
import { useRouter } from '../../module/React-Router';
import { Button } from '../Atom/button';

interface Props {
  children?: ReactNode;
  confirmHandler: (...args: any) => any;
  isFilled: boolean;
}
function AuthFrame({ children, confirmHandler, isFilled }: Props) {
  const { currentPath, push } = useRouter();
  const pathname = currentPath.replace(/\//g, '');

  const onNav = () => {
    currentPath === '/signin' ? push('/signup') : push('/signin');
  };

  return (
    <Container>
      <Title>{pathname === 'signin' ? '로그인' : '회원가입'}</Title>
      {children}
      <ButtonBox>
        <NavBtn onClick={onNav}>{`go to ${pathname === 'signin' ? 'signup' : 'signin'}`}</NavBtn>
        <ConfirmBtn data-testid={`${pathname}-button`} onClick={confirmHandler} disabled={!isFilled}>
          confirm
        </ConfirmBtn>
      </ButtonBox>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  max-width: 50rem;
  height: 80%;
  max-height: 70rem;

  border-radius: 1rem;
  border: 1px solid ${colors.indigo};
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  background-image: ${gradients.pointGraidentBlue};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  font-size: 5rem;
`;

const ButtonBox = styled.div`
  display: flex;
`;
const NavBtn = styled(Button)`
  padding: 2rem;
`;
const ConfirmBtn = styled(Button)<{ disabled: boolean }>`
  transition: all 0.5s ease-in;
  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.grayTwo : theme.colors.pointColorBlue)};
  padding: 2rem;
`;

export default AuthFrame;
