import { css, SerializedStyles, keyframes } from '@emotion/react';

export const colors = {
  black: 'rgb(17 24 39)',
  white: 'rgb(243 244 246)',
  indigo: 'rgb(31 41 55)',
  grayOne: '#F7F7F7',
  grayTwo: '#E5E5E5',
  grayThree: '#707070',
  grayFour: '#5a5a5a',
  grayFive: '#9b9a97',
  pointColorGray: '#596891bf',
  pointColorPurple: '#ad8bf6',
  pointColorYellow: '#ffc114',
  pointColorCarrot: '#ff5248',
  pointColorBrown: '#E1AD49',
  pointColorMint: '#19cdca',
  pointColorBlue: '#4e80e1',
  pointColorPastelBlue: '#4165c8bf',
  pointColorGreen: '#6ddb00',
  pointColorGrapefruit: '#d55b10bf',
  pointColorBluegrey: '#162d6cbf',
  lightblue: '#C5E2EE',
  footerColor: '#313131',
  mainColor: '#E7286A',
  waringColor: '#ff3838',
  starColor: '#fd4',
  beige: '#f6d77d',
} as const;

export const gradients = {
  pointGraidentBlue:
    'linear-gradient(167deg, rgba(2, 0, 36, 1) 0%, rgba(23, 215, 186, 1) 30%, rgba(0, 212, 255, 1) 100%)',
} as const;

//breackpoint
export type DeviceSize = 'mobile(375px)' | 'tablet(768px)' | 'web(1024px)' | 'monitor(1440px)';
export const genMedia = (deviceSize: DeviceSize, styling: SerializedStyles) => {
  const sizes = {
    mobile: '375px',
    tablet: '768px',
    web: '1024px',
    monitor: '1440px',
  };
  const sliceIndex = deviceSize.indexOf('(');
  const targetSize = deviceSize.slice(0, sliceIndex) as keyof typeof sizes;

  return css`
    @media screen and (min-width: ${sizes[targetSize]}) {
      ${styling}
    }
  `;
};

//cetering
export const middle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const centerRow = css`
  ${middle}
  justify-content: initial;
`;

export const centerCol = css`
  ${middle}
  flex-direction: column;
  justify-content: initial;
`;

//! animations
export const animations = {
  rotate: keyframes`
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
  `,
  fadeIn: keyframes`
    0%{
      opacity:0;
      transform: translateY(3rem);
    }
    100%{
      opacity:1;
      transform: translateY(0rem);
    }
  `,
  fadeInOut: keyframes`
       0%  {opacity: 0}
       20% {opacity: 0}
       50% {opacity: 1}
       100%{opacity: 0}
  `,
  popup: keyframes`
    0% {
      opacity:0; 
      transform:scale(0);
    }
    100%{
      opacity:1;
      transform: scale(1);
    }
  `,
};

export const theme = {
  colors,
  middle,
  centerRow,
  centerCol,
  animations,
  backgroundColor: 'white',
  fontColor: colors.black,
  pointColor: colors.pointColorBlue,
  subPointColor: colors.pointColorGray,
  linkColor: colors.pointColorPastelBlue,
};

export type ThemeType = typeof theme;
