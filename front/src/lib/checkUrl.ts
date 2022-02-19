import { url as defaultUrl } from "@apis/.";

export const checkUrl = (url: string) =>
  url.includes("http://") || url.includes("https://") ? url : `${defaultUrl}/image/${url}`;
