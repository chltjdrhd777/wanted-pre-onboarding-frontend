import { ThemeProvider } from '@emotion/react';
import React, { PropsWithChildren } from 'react';
import { theme } from '../Styles/theme';

function Index({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Index;
