import { render, screen } from "@testing-library/react";
import ToggleMessage from "../../src/components/ToggleMessage";
import userEvent from "@testing-library/user-event";

describe("Toggle Message Component", () => {
  beforeEach(() => {
    render(<ToggleMessage />);
  });
  it("should toggle the message when button is clicked", async () => {
    const toggleButton = screen.getByRole("button", {
      name: /Toggle Message/i,
    });

    expect(screen.queryByText(/This message is visible!/i)).toBeNull();

    await userEvent.click(toggleButton);
    expect(toggleButton).toBeInTheDocument();

    await userEvent.click(toggleButton);
    expect(screen.queryByText(/This message is visible!/i)).toBeNull();
  });
});
