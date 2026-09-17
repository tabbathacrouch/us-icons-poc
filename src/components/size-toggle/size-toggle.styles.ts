"use client";

import styled from "styled-components";

export const Fieldset = styled.fieldset`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  margin: 0;
  padding: 0;
  border: 0;
`;

export const Legend = styled.legend`
  float: left;
  padding: 0;
  margin-right: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Option = styled.label`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  font-size: ${({ theme }) => theme.fontSize.sm};
  background: ${({ theme }) => theme.colors.surface};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;

  /* Keeps the native radio for keyboard and screen readers, but lets the label
     carry the visual state. :focus-visible on the input styles the label too. */
  &:has(input:checked) {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accentText};
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &:has(input:focus-visible) {
    outline: 0.1875rem solid ${({ theme }) => theme.colors.focus};
    outline-offset: 0.125rem;
  }
`;

export const Radio = styled.input`
  /* Hidden visually, still focusable and announced. */
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;
