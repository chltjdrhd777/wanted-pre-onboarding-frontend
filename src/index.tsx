import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from './Provider/ThemeProvider';
import GlobalCSS from './Styles/GlobalCSS';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalCSS />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
