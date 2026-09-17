"use client";

import styled from "styled-components";

export const Columns = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.lg};

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Panel = styled.section`
  padding: ${({ theme }) => theme.space.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
`;

export const PanelTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.space.xs};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const PanelNote = styled.p`
  margin: 0 0 ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

/**
 * Sizes both renderers identically: Font Awesome's SVG is 1em tall, and the
 * raw SVG below is given the same height explicitly. Anything else would make
 * the comparison meaningless.
 */
export const IconRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.space.lg};
  color: ${({ theme }) => theme.colors.icon};
  font-size: 3rem;

  svg {
    height: 3rem;
    width: auto;
  }
`;
