import { SerializedStyles } from '@emotion/react';
import React, { PropsWithChildren } from 'react';
import { Input as BaseInput } from '../Atom/input';
import styled from '@emotion/styled';

interface AuthInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  additionalCSS?: SerializedStyles;
}
function AuthInput({ children, additionalCSS, ...attrs }: PropsWithChildren<AuthInputProps>) {
  console.log('additionals', additionalCSS);
  return (
    <Input additionalCSS={additionalCSS} {...attrs}>
      {children}
    </Input>
  );
}

const Input = styled(BaseInput)<{ additionalCSS?: SerializedStyles }>`
  ${({ additionalCSS }) => additionalCSS && additionalCSS}
`;

export default AuthInput;
