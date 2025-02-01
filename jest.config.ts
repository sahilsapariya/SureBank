import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

module.exports = {
  preset: "ts-jest/presets/js-with-ts-esm",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths || {}, {
      prefix: "<rootDir>/",
    }),
    "^.+\\.(css|scss|sass)$": "identity-obj-proxy", // Mock styles
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest", // Use ts-jest to transform TypeScript
  },
  transformIgnorePatterns: [
    "node_modules/(?!lucide-react)", // Allow transforming ESM modules
  ],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json", // Use Jest-specific tsconfig
      useESM: true, // Ensure ESM compatibility
    },
  },
};
