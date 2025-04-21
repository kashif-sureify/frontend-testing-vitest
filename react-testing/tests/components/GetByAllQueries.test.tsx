import { render, screen } from "@testing-library/react";
import GetByAllQueries from "../../src/components/GetByAllQueries";

describe("GetByAllQueries", () => {
  it("should render multiple elements that can be queries by various methods", () => {
    render(<GetByAllQueries />);

    const inputsByLabelText = screen.getAllByLabelText(/Label for input/i);
    expect(inputsByLabelText.length).toBe(2);

    inputsByLabelText.forEach((input) => {
      expect(input).toBeInTheDocument();
      expect(input).toBeDisabled();
    });
  });

  it("should render multiple elements that can be queries by various placeholders", () => {
    render(<GetByAllQueries />);

    const inputByplaceholderText =
      screen.getAllByPlaceholderText(/Enter Something/i);
    expect(inputByplaceholderText.length).toBe(2);

    inputByplaceholderText.forEach((input) => {
      expect(input).toBeInTheDocument();
      expect(input).toBeDisabled();
    });
  });

  it("should render multiple elements that can be queries by various text", () => {
    render(<GetByAllQueries />);

    const paragraphByText = screen.getAllByText(/This is a paragraph/i);
    expect(paragraphByText.length).toBe(2);

    paragraphByText.forEach((paragraph) => {
      expect(paragraph).toBeInTheDocument();
    });
  });

  it("should render multiple elements that can be queries by various display value", () => {
    render(<GetByAllQueries />);

    const inputBydisplayValue =
      screen.getAllByDisplayValue(/Some Display value/i);
    expect(inputBydisplayValue.length).toBe(1);
    expect(inputBydisplayValue[0]).toBeInTheDocument();
    expect(inputBydisplayValue[0]).toBeDisabled();
  });

  it("should render multiple elements that can be queries by various image alt Text", () => {
    render(<GetByAllQueries />);

    const imageByAnotherAltText =
      screen.getAllByAltText(/Another simple image/i);
    expect(imageByAnotherAltText.length).toBe(1);
    expect(imageByAnotherAltText[0]).toBeInTheDocument();
  });

  it("should render multiple elements that can be queries by various titles", () => {
    render(<GetByAllQueries />);

    const divByTitles = screen.getAllByTitle(
      /This is a div with title attribute/i
    );
    expect(divByTitles.length).toBe(2);

    divByTitles.forEach((title) => {
      expect(title).toBeInTheDocument();
    });
  });

  it("should render multiple elements that can be queries by various role", () => {
    render(<GetByAllQueries />);

    const buttonsByRole = screen.getAllByRole("button", {
      name: /This is a button/i,
    });
    expect(buttonsByRole.length).toBe(2);

    buttonsByRole.forEach((button) => {
      expect(button).toBeInTheDocument();
      expect(button).toBeDisabled();
    });
  });

  it("should render multiple elements that can be queries by various custom-id", () => {
    render(<GetByAllQueries />);

    const divByTestId = screen.getAllByTestId(/custom-test-id-/i);
    expect(divByTestId.length).toBe(2);

    divByTestId.forEach((test) => {
      expect(test).toBeInTheDocument();
    });
  });
});
