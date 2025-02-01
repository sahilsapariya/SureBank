import "@testing-library/jest-dom";

// Mock the nookies functions globally
beforeAll(() => {
  jest.mock("nookies", () => ({
    setCookie: jest.fn(),
    parseCookies: jest.fn(),
    destroyCookie: jest.fn(),
  }));
});

afterAll(() => {
  jest.restoreAllMocks(); // Restore original mocks after tests
});
