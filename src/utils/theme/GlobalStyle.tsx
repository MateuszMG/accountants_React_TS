import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle(
  ({ theme: { colors } }) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      font-family: 'Roboto-Regular', 'Roboto', 'Arial';
    }

    body {
      color: ${colors.textPrimary};
      min-height: 100vh;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    p,
    h1 {
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0px;
      text-align: left;
    }
  `,
);
