import { parseCookies, setCookie, destroyCookie } from "nookies";

export const setCookieStorage = (key: string, value: string, options?: any) => {
  setCookie(null, key, value, options);
};

export const getCookieStorage = (key: string) => {
  const cookies = parseCookies();
  return cookies[key] || null;
};

export const removeCookieStorage = (key: string) => {
  destroyCookie(null, key);
};
