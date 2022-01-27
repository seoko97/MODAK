import "styled-components";
import { bp } from ".";

declare module "styled-components" {
  export interface DefaultTheme {
    BP: typeof bp;
    BAKCGROUND_COLOR: {
      PRIMARY_COLOR: string;
      SECONDARY_COLOR: string;
      THIRDARY_COLOR: string;
    };
    FONT_COLOR: {
      PRIMARY_COLOR: string;
      SECONDARY_COLOR: string;
    };
  }
}
