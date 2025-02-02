# SureBank Repository

Welcome to the SureBank repository! This guide will help you set up the project on your local machine and provide tips on how to proceed after setup.

---

## Prerequisites

Before setting up the project, ensure the following tools are installed on your system:

1. **Node.js** (v16 or higher): [Download Node.js](https://nodejs.org/)
2. **npm** (comes with Node.js)
3. **Git**: [Install Git](https://git-scm.com/)
4. **VS Code** (recommended): [Download Visual Studio Code](https://code.visualstudio.com/)

---

## Getting Started

Follow these steps to clone and set up the repository locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/sahilsapariya/surebank.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd surebank
   ```

3. **Install Dependencies**:
   Using npm:

   ```bash
   npm install
   ```

4. **Set Up Configuration**:

   - Create a `config.ts` file in the `src/common` directory.
   - Add the required configuration values in `config.ts` (coordinate with the team or refer to project documentation for the list).
   - The `config.example.ts` file serves as a template for configuration settings. Developers should copy this file to `config.ts` and replace placeholder values with actual settings.
   - Example `config.ts`:
     ```typescript
     export const config = {
       apiUrl: "https://api.example.com",
       someKey: "your-value-here",
     };
     ```

5. **Run the Development Server**:
   Using npm:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## Folder Structure

Below is the folder structure, formatted as shown in the repository, with comments explaining each file or folder:

```
.
surebank-frontend/          # Root directory of the project
├── __mocks__/              # Contains mock files for testing
├── __tests__/              # Test files for the project
├── .husky/                 # Husky configuration folder for Git hooks
├── .next/                  # Next.js build and cache files (generated automatically)
├── docs/                   # Documentation files (if any)
├── public/                 # Static assets like images, fonts, etc.
├── src/                    # Main source code folder
│   ├── app/                # Main application folder (assumed for Next.js routing)
│   │   ├── favicon.ico     # App icon
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Layout wrapper
│   │   ├── page.tsx        # Main page component
│   ├── common/             # Shared utilities and context
│   │   ├── context/        # React context for state management
│   │   ├── hooks/          # Custom React hooks
│   │   ├── i18n/           # Internationalization files
│   │   ├── config.example.ts  # Example configuration file, serves as a template for `config.ts`
│   │   ├── config.ts       # Project configuration file
│   ├── components/         # Reusable UI components
│   │   ├── languages/      # Language selection components
│   │   ├── theme/          # Theme-related components
│   │   ├── ui/             # UI elements like buttons, modals, etc.
│   ├── lib/                # Utility libraries
│   │   ├── storage/        # Functions for handling storage
│   │   ├── apiClient.ts    # API client configuration and methods
│   │   ├── errorMessages.ts # Centralized error messages
│   │   ├── logger.ts       # Logging utility
│   │   ├── utils.ts        # Miscellaneous utility functions
├── .gitignore              # Specifies files and directories to ignore in Git
├── .prettierignore         # Specifies files and directories to ignore by Prettier
├── commitlint.config.cjs   # Configuration for commit message linting
├── components.json         # Possible configuration or metadata for components
├── eslint.config.mjs       # ESLint configuration file
├── jest.config.ts          # Jest testing framework configuration
├── jest.setup.ts           # Jest setup file for initialization
├── next-env.d.ts           # TypeScript type declarations for Next.js
├── next.config.js          # Next.js configuration file
├── package-lock.json       # Exact dependency tree for npm (auto-generated)
├── package.json            # Project metadata and dependencies
├── postcss.config.mjs      # PostCSS configuration for CSS processing
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── tsconfig.jest.json      # TypeScript configuration specifically for Jest
```

---

## Suggested Workflow

Once the setup is complete, here are some recommended next steps:

1. **Explore the Folder Structure**:
   Familiarize yourself with the architecture and understand the role of key folders such as `app/`, `components/`, and `lib/`.

2. **Add a New Page**:

   - Refer to the guidelines in the project documentation for creating a new page.
   - Example: Add a folder in `src/app/` and implement the `page.tsx` file.

3. **Contribute a Component**:

   - Add reusable components in the `src/components/` directory.
   - Test the component thoroughly before integrating it into pages.

4. **Run Linting**:
   To maintain code quality, run the linting command:

   ```bash
   npm run lint
   ```

5. **Check Existing Issues**:
   - Look at the GitHub repository issues to pick a task.
   - Coordinate with the team for new assignments.

---

## Additional Commands

- **Build the Application**:

  ```bash
  npm run build
  ```

- **Start the Production Server**:

  ```bash
  npm run start
  ```

- **Run Tests** (if applicable):
  ```bash
  npm test
  ```

---

## Need Help?

If you face any issues while setting up or working on the project, feel free to reach out to the team or create a GitHub issue.

External Dependencies: For more information about external dependencies, please refer to the [EXTERNAL_LIBRARIES.md](docs/EXTERNAL_LIBRARIES.md) file.

Happy coding! 🚀
