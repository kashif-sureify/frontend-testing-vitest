// 1. Import all the necessary packages
// 2. Describe your test suites
// 3. Write your tests
// 4. Render your component to the DOM (for testing)
// 5. Select the elements from the DOM you want to test
// 6. Assert the expected results

import { render, screen } from "@testing-library/react";
import UserStatus from "../../src/components/UserStatus";

describe("UserStatus Component", () => {
  it("display a welcome message when an email is provided", () => {
    render(<UserStatus email="kashifjsr7@gmail.com" />);

    const welcomeMessage = screen.getByText(/welcome/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("display a signup button when no email is provided", () => {
    render(<UserStatus email="" />);

    const signUpButton = screen.getByText(/Sign Up/i);
    expect(signUpButton).toBeInTheDocument();
  });
});
