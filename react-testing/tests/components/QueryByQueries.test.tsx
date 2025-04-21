import { render, screen } from "@testing-library/react";
import QueryByQueries from "../../src/components/QueryByQueries";

describe("Test queryBy method", () => {
  it("should render the component with query by role", () => {
    render(<QueryByQueries />);

    const alert = screen.queryByRole("alert");
    const button = screen.queryByRole("button");

    expect(alert).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should render the component with query by label", () => {
    render(<QueryByQueries />);

    const label1 = screen.queryByLabelText(/Label 1/i);
    const label2 = screen.queryByLabelText("Label 2");

    expect(label1).toBeInTheDocument();
    expect(label1).toBeDisabled();

    expect(label2).toBeInTheDocument();
    expect(label2).toBeDisabled();
  });

  it("should render the component with query by text", () => {
    render(<QueryByQueries />);

    const headerByText = screen.queryByText("Header Text");
    const paragraphByText = screen.queryByText("This is some paragraph text.");

    expect(headerByText).toBeInTheDocument();

    expect(paragraphByText).toBeInTheDocument();
  });

  it("should render the component with query by test id", () => {
    render(<QueryByQueries />);

    const divByTestId = screen.queryByTestId("custom-element");

    expect(divByTestId).toBeInTheDocument();
  });

  it("should render the component with query by display value", () => {
    render(<QueryByQueries />);

    const inputByDisplayValue = screen.queryByDisplayValue("Pre-filled Text");

    expect(inputByDisplayValue).toBeInTheDocument();
  });
});
