"use client";

import Link from "next/link";
import styled from "styled-components";

export const Main = styled.main`
  max-width: 72rem;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.space.lg} ${theme.space.md}`};

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: ${({ theme }) => `${theme.space.xl} ${theme.space.lg}`};
  }
`;

export const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.space.xl};
`;

export const Title = styled.h1`
  margin: 0 0 ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 1.2;
`;

export const Lede = styled.p`
  margin: 0 0 ${({ theme }) => theme.space.md};
  max-width: 44rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Code = styled.code`
  font-family: ${({ theme }) => theme.fontFamily.mono};
  font-size: ${({ theme }) => theme.fontSize.sm};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  padding: 0 ${({ theme }) => theme.space.xs};
  border-radius: ${({ theme }) => theme.radii.sm};
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;
