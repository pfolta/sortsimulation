import "styled-components";

import { ThemeShape } from "@/app/theme";

declare module "styled-components" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends ThemeShape {}
}
