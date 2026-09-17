import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    // SWC transform for styled-components: stable class names across server and
    // client (no hydration mismatch) and readable names in devtools.
    styledComponents: true,
  },
};

export default nextConfig;
