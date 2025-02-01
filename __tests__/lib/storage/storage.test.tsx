import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
} from "@surebank/lib/storage/localStorage";
import {
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
  clearSessionStorage,
} from "@surebank/lib/storage/sessionStorage";

describe("Storage Utilities", () => {
  // Test localStorage functions
  describe("localStorage", () => {
    beforeEach(() => {
      localStorage.clear(); // Clear localStorage before each test
    });

    it("should set and get values from localStorage", () => {
      setLocalStorage("testKey", { data: "testData" });
      const result = getLocalStorage("testKey");
      expect(result).toEqual({ data: "testData" });
    });

    it("should return null if the key does not exist in localStorage", () => {
      const result = getLocalStorage("nonExistentKey");
      expect(result).toBeNull();
    });

    it("should remove values from localStorage", () => {
      setLocalStorage("testKey", { data: "testData" });
      removeLocalStorage("testKey");
      const result = getLocalStorage("testKey");
      expect(result).toBeNull();
    });

    it("should clear all items from localStorage", () => {
      setLocalStorage("testKey1", { data: "testData1" });
      setLocalStorage("testKey2", { data: "testData2" });
      clearLocalStorage();
      const result1 = getLocalStorage("testKey1");
      const result2 = getLocalStorage("testKey2");
      expect(result1).toBeNull();
      expect(result2).toBeNull();
    });
  });

  // Test sessionStorage functions
  describe("sessionStorage", () => {
    beforeEach(() => {
      sessionStorage.clear(); // Clear sessionStorage before each test
    });

    it("should set and get values from sessionStorage", () => {
      setSessionStorage("sessionKey", { sessionData: "testSessionData" });
      const result = getSessionStorage("sessionKey");
      expect(result).toEqual({ sessionData: "testSessionData" });
    });

    it("should return null if the key does not exist in sessionStorage", () => {
      const result = getSessionStorage("nonExistentSessionKey");
      expect(result).toBeNull();
    });

    it("should remove values from sessionStorage", () => {
      setSessionStorage("sessionKey", { sessionData: "testSessionData" });
      removeSessionStorage("sessionKey");
      const result = getSessionStorage("sessionKey");
      expect(result).toBeNull();
    });

    it("should clear all items from sessionStorage", () => {
      setSessionStorage("sessionKey1", { sessionData: "testData1" });
      setSessionStorage("sessionKey2", { sessionData: "testData2" });
      clearSessionStorage();
      const result1 = getSessionStorage("sessionKey1");
      const result2 = getSessionStorage("sessionKey2");
      expect(result1).toBeNull();
      expect(result2).toBeNull();
    });
  });
});
