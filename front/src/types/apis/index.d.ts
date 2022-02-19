import { HeadersDefaults } from "axios";

export interface RequestHeader extends HeadersDefaults {
  Cookie: string;
}

export interface PayloadHeaders {
  headers: AxiosResponseHeaders;
}

export interface ResponseDTO {
  status: boolean;
}

export interface ResImgs extends ResponseDTO {
  images: string[];
}

export interface ResImg extends ResponseDTO {
  image: string;
}

export interface ResponseRejected extends ResponseDTO {
  message: string;
}
