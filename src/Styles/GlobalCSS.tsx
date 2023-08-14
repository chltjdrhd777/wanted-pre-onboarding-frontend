import React from 'react';
import { Global, css } from '@emotion/react';

function GlobalCSS() {
  const globalStyle = css`
    :root {
      --zIndex-0st: 11000;
      --zIndex-1st: 10000;
      --zIndex-2st: 9000;
      --zIndex-3st: 8000;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      word-break: keep-all;
    }
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
      overflow-x: hidden;
      /* overscroll-behavior: none; */
    }
    body {
      font-size: 1.6rem;
      font-family: 'NotoSansKR', sans-serif;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -o-user-select: none;
    }
    a {
      text-decoration: none;
      color: black;
    }
    ul {
      list-style-type: none;
    }
    img {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    button {
      border: none;
      background-color: transparent;
      border-radius: 1rem;
      cursor: pointer;
      &:active,
      &:focus {
        outline: none;
      }
    }
    input {
      outline: none;
      &:focus::placeholder {
        color: transparent;
      }
    }
  `;

  return <Global styles={globalStyle} />;
}

export default GlobalCSS;
