import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { ModeToggle } from "@surebank/components/theme/ModeToggle";

// Mock `useTheme` from `next-themes`
jest.mock("next-themes", () => ({
  useTheme: () => ({
    setTheme: jest.fn(),
  }),
}));

describe("ModeToggle Component", () => {
  it("renders the theme toggle button", () => {
    render(<ModeToggle />);
    expect(
      screen.getByRole("button", { name: /toggle theme/i }),
    ).toBeInTheDocument();
  });

  it("opens the dropdown menu when clicked", async () => {
    render(<ModeToggle />);
    const user = userEvent.setup();
    const toggleButton = screen.getByRole("button", { name: /toggle theme/i });

    // Click the toggle button
    await user.click(toggleButton);

    // Check if the dropdown menu items appear
    expect(screen.getByText("Light")).toBeInTheDocument();
    expect(screen.getByText("Dark")).toBeInTheDocument();
    expect(screen.getByText("System")).toBeInTheDocument();
  });

  it("calls `setTheme` with 'light' when Light is clicked", async () => {
    const setTheme = jest.fn();
    jest
      .spyOn(require("next-themes"), "useTheme")
      .mockReturnValue({ setTheme });

    render(<ModeToggle />);
    const user = userEvent.setup();
    const toggleButton = screen.getByRole("button", { name: /toggle theme/i });

    // Open dropdown and click "Light"
    await user.click(toggleButton);
    await user.click(screen.getByText("Light"));

    expect(setTheme).toHaveBeenCalledWith("light");
  });

  it("calls `setTheme` with 'dark' when Dark is clicked", async () => {
    const setTheme = jest.fn();
    jest
      .spyOn(require("next-themes"), "useTheme")
      .mockReturnValue({ setTheme });

    render(<ModeToggle />);
    const user = userEvent.setup();
    const toggleButton = screen.getByRole("button", { name: /toggle theme/i });

    // Open dropdown and click "Dark"
    await user.click(toggleButton);
    await user.click(screen.getByText("Dark"));

    expect(setTheme).toHaveBeenCalledWith("dark");
  });

  it("calls `setTheme` with 'system' when System is clicked", async () => {
    const setTheme = jest.fn();
    jest
      .spyOn(require("next-themes"), "useTheme")
      .mockReturnValue({ setTheme });

    render(<ModeToggle />);
    const user = userEvent.setup();
    const toggleButton = screen.getByRole("button", { name: /toggle theme/i });

    // Open dropdown and click "System"
    await user.click(toggleButton);
    await user.click(screen.getByText("System"));

    expect(setTheme).toHaveBeenCalledWith("system");
  });
});
