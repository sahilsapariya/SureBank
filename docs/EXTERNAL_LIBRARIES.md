# External Libraries Documentation for surebank Frontend

This document lists the external dependencies used in the **surebank Frontend** project, including both runtime and development dependencies, along with their respective licenses.

---

## Dependencies

| **Library**                       | **Version** | **License** | **Purpose**                                  | **Description**                                                                       |
| --------------------------------- | ----------- | ----------- | -------------------------------------------- | ------------------------------------------------------------------------------------- |
| **@radix-ui/react-dropdown-menu** | v2.1.4      | MIT         | Dropdown menus                               | Unstyled, accessible, and customizable dropdown menus for React applications.         |
| **@radix-ui/react-slot**          | v1.1.1      | MIT         | Slot component for composition               | Flexible way to compose components using slot-based architectures.                    |
| **@radix-ui/react-toast**         | v1.2.5      | MIT         | Toast notifications                          | Provides accessible and customizable toast notifications.                             |
| **@tiptap/pm**                    | v2.11.2     | MIT         | ProseMirror model for TipTap                 | Low-level utilities for managing the ProseMirror document model used by TipTap.       |
| **@tiptap/react**                 | v2.11.2     | MIT         | React bindings for TipTap editor             | Integrates TipTap rich-text editor into React applications.                           |
| **@tiptap/starter-kit**           | v2.11.2     | MIT         | Starter kit for TipTap                       | Provides useful extensions for building a rich-text editor with TipTap.               |
| **axios**                         | v1.7.9      | MIT         | HTTP client for API requests                 | Simplifies making HTTP requests from the frontend to backend services.                |
| **class-variance-authority**      | v0.7.1      | MIT         | CSS class variance management                | A utility for managing CSS class names in a declarative way.                          |
| **clsx**                          | v2.1.1      | MIT         | ClassName utility                            | Conditionally constructs `className` strings.                                         |
| **lucide-react**                  | v0.473.0    | MIT         | Customizable SVG icons for React             | High-quality icons for React, customizable with props.                                |
| **next**                          | v15.1.5     | MIT         | React framework for production               | A framework for building React apps with SSR, static site generation, and API routes. |
| **next-intl**                     | v3.26.3     | MIT         | Internationalization library for Next.js     | Manages translations, locales, and formatting for Next.js apps.                       |
| **next-themes**                   | v0.4.4      | MIT         | Theme switcher for Next.js                   | Allows users to switch between light and dark themes in Next.js applications.         |
| **nookies**                       | v2.5.2      | MIT         | Cookie management for Next.js                | Helps manage cookies for both client and server-side operations.                      |
| **react**                         | v19.0.0     | MIT         | JavaScript library for building UIs          | Core library for building user interfaces in a declarative, component-based way.      |
| **react-dom**                     | v19.0.0     | MIT         | DOM-specific methods for React               | Allows rendering React components into the DOM.                                       |
| **tailwind-merge**                | v2.6.0      | MIT         | Utility for merging Tailwind CSS class names | Merges conflicting Tailwind class names intelligently.                                |
| **tailwindcss-animate**           | v1.0.7      | MIT         | Animation utilities for Tailwind CSS         | Adds animation support to Tailwind CSS with utility classes.                          |
| **zod**                           | v3.24.1     | MIT         | TypeScript-first schema validation library   | Validates data using TypeScript-based schemas.                                        |

---

## DevDependencies

| **Library**                         | **Version** | **License** | **Purpose**                                      | **Description**                                                            |
| ----------------------------------- | ----------- | ----------- | ------------------------------------------------ | -------------------------------------------------------------------------- |
| **@commitlint/cli**                 | v19.6.1     | MIT         | Lint commit messages                             | Ensures commit messages follow a specified convention.                     |
| **@commitlint/config-conventional** | v19.6.0     | MIT         | Conventional commit configuration for commitlint | Provides configuration for linting commit messages conventionally.         |
| **@eslint/eslintrc**                | v3          | MIT         | ESLint configuration                             | Base configuration for ESLint to enforce code quality standards.           |
| **@testing-library/jest-dom**       | v6.6.3      | MIT         | Custom matchers for Jest DOM tests               | Enhances Jest with additional matchers for DOM testing.                    |
| **@testing-library/react**          | v16.2.0     | MIT         | React testing utilities for Jest                 | Provides utilities for testing React components.                           |
| **@testing-library/user-event**     | v14.6.1     | MIT         | Simulates user interactions for tests            | Simulates real user events in tests.                                       |
| **@types/cookie**                   | v1.0.0      | MIT         | TypeScript types for the `cookie` library        | Type definitions for the cookie handling library.                          |
| **@types/jest**                     | v29.5.14    | MIT         | TypeScript types for Jest                        | Provides type definitions for Jest.                                        |
| **@types/node**                     | v20         | MIT         | TypeScript types for Node.js                     | Type definitions for Node.js.                                              |
| **@types/react**                    | v19         | MIT         | TypeScript types for React                       | Type definitions for React.                                                |
| **@types/react-dom**                | v19         | MIT         | TypeScript types for React DOM                   | Type definitions for React DOM.                                            |
| **eslint**                          | v9          | MIT         | Linter for JavaScript and TypeScript             | Maintains consistent code quality and identifies potential issues.         |
| **eslint-config-next**              | v15.1.5     | MIT         | ESLint config for Next.js                        | Provides ESLint configuration optimized for Next.js projects.              |
| **eslint-plugin-jest-dom**          | v5.5.0      | MIT         | ESLint plugin for Jest DOM assertions            | Linting rules for testing with Jest DOM.                                   |
| **eslint-plugin-sonarjs**           | v3.0.1      | MIT         | ESLint plugin for detecting code quality issues  | Linting rules for detecting potential code quality issues.                 |
| **eslint-plugin-testing-library**   | v7.1.1      | MIT         | ESLint plugin for React Testing Library          | Linting rules for working with React Testing Library.                      |
| **husky**                           | v9.1.7      | MIT         | Git hooks for automating tasks                   | Automates pre-commit and pre-push Git hooks.                               |
| **jest**                            | v29.7.0     | MIT         | JavaScript testing framework                     | Provides a framework for running tests and assertions.                     |
| **jest-environment-jsdom**          | v29.7.0     | MIT         | JSDOM environment for Jest testing               | Provides a simulated browser environment for Jest tests.                   |
| **postcss**                         | v8          | MIT         | PostCSS tool for transforming CSS                | A tool for processing CSS with plugins.                                    |
| **prettier**                        | v3.4.2      | MIT         | Code formatter for consistent style              | Automatically formats code to follow consistent style.                     |
| **tailwindcss**                     | v3.4.1      | MIT         | Utility-first CSS framework                      | A framework for building custom, responsive designs using utility classes. |
| **ts-jest**                         | v29.2.5     | MIT         | TypeScript preprocessor for Jest                 | Preprocesses TypeScript files for Jest testing.                            |
| **ts-node**                         | v10.9.2     | MIT         | TypeScript execution for Node.js                 | Executes TypeScript code directly in Node.js without compilation.          |
| **typescript**                      | v5          | MIT         | TypeScript compiler                              | Provides static type checking for JavaScript.                              |

---

### **Notes**

- All the dependencies are licensed under **MIT**, which is a permissive open-source license.
- The **UNLICENSED** package in your dependencies should be reviewed and potentially replaced or removed, as it doesn't provide legal clarity for usage, modification, or distribution.
