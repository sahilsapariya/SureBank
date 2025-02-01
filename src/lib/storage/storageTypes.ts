export interface StorageOptions {
  expires?: number; // Expiration time in seconds for cookies
  path?: string; // Path for cookies
}

export type StorageType = "localStorage" | "sessionStorage" | "cookieStorage";
