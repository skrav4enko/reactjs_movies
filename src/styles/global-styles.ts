import { css } from '@emotion/core';

export const globalStyles = css`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100%;
  min-height: 100%;
}

body {
  margin: 0;
  font-family: 'Montserrat', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-background, #232323);
}
`
