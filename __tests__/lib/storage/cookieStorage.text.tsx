import {
  setCookieStorage,
  getCookieStorage,
  removeCookieStorage,
} from "@surebank/lib/storage/cookieStorage";
import { setCookie, parseCookies, destroyCookie } from "nookies";

// Mock the nookies functions
jest.mock("nookies", () => ({
  setCookie: jest.fn(),
  parseCookies: jest.fn(),
  destroyCookie: jest.fn(),
}));

describe("Cookie Storage Functions", () => {
  it("should set a cookie using setCookieStorage", () => {
    setCookieStorage("user", "test_user", { path: "/", expires: 7 });
    expect(setCookie).toHaveBeenCalledWith(null, "user", "test_user", {
      path: "/",
      expires: 7,
    });
  });

  it("should retrieve a cookie using getCookieStorage", () => {
    // Mock parseCookies to return a sample object
    (parseCookies as jest.Mock).mockReturnValue({ user: "test_user" });
    const result = getCookieStorage("user");
    expect(result).toBe("test_user");
  });

  it("should return null if cookie does not exist", () => {
    // Mock parseCookies to return an empty object
    (parseCookies as jest.Mock).mockReturnValue({});
    const result = getCookieStorage("nonexistent");
    expect(result).toBeNull();
  });

  it("should remove a cookie using removeCookieStorage", () => {
    removeCookieStorage("user");
    expect(destroyCookie).toHaveBeenCalledWith(null, "user");
  });
});
