"use client";

import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  padding: ${({ theme }) => theme.space.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  text-align: center;
`;

/**
 * Font Awesome sizes its SVG at 1em, so the wrapper's font-size drives the icon
 * size. $size is a transient prop: styled-components keeps it out of the DOM.
 */
export const IconFrame = styled.div<{ $size: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 3.5rem;
  color: ${({ theme }) => theme.colors.icon};
  font-size: ${({ $size }) => $size};
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
`;

export const PostalCode = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.mono};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.05em;
`;

export const LegibilityNote = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.focus};
`;

export const CopyButton = styled.button`
  margin-top: ${({ theme }) => theme.space.xs};
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.border};
  }
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 0.0625rem;
  height: 0.0625rem;
  padding: 0;
  margin: -0.0625rem;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;
