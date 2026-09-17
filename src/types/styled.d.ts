import "styled-components";
import type { AppTheme } from "@/theme/theme";

declare module "styled-components" {
  // Makes `props.theme` fully typed inside every styled component.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AppTheme {}
}
