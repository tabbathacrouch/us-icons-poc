"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    /* 1rem === 16px, so the icon size toggle's rem values map to the px sizes
       the package README documents legibility thresholds in. */
    font-size: 100%;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fontFamily.body};
    line-height: 1.5;
  }

  /* One global focus style, so no component defines its own outline. */
  :focus-visible {
    outline: 0.1875rem solid ${({ theme }) => theme.colors.focus};
    outline-offset: 0.125rem;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
