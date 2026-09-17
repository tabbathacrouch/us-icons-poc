// Must run before any icon renders — see the comment in this module.
import "@/lib/fontawesome";

import type { Metadata } from "next";
import { Providers } from "./providers";
import { StyledComponentsRegistry } from "./styled-components-registry";

export const metadata: Metadata = {
  title: "US State & Territory Icons",
  description:
    "POC gallery for united-states-and-territories-solid-svg-icons in Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
