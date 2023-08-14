import { SerializedStyles } from '@emotion/react';
import React, { PropsWithChildren } from 'react';
import { Button as BaseBtn } from '../Atom/button';
import styled from '@emotion/styled';

interface AuthBtnProps extends React.DOMAttributes<HTMLButtonElement> {
  additionalCSS?: SerializedStyles;
}
function AuthBtn({ children, additionalCSS, ...attrs }: PropsWithChildren<AuthBtnProps>) {
  return (
    <Button additionalCSS={additionalCSS} {...attrs}>
      {children}
    </Button>
  );
}

const Button = styled(BaseBtn)<{ additionalCSS?: SerializedStyles }>`
  ${({ additionalCSS }) => additionalCSS && additionalCSS}
`;

export default AuthBtn;
