import { HeadersDefaults } from "axios";

export interface RequestHeader extends HeadersDefaults {
  Cookie: string;
}
