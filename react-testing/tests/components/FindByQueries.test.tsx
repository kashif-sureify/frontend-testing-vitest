import { render, screen } from "@testing-library/react";
import FindByQueries from "../../src/components/FindByQueries";

describe("FindByQueries Component", () => {
  test("finds an element by its text content", async () => {
    render(<FindByQueries />);

    const headingElement = await screen.findByText(/findBy Queries Test/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("finds an element by its label text", async () => {
    render(<FindByQueries />);

    const labelText = await screen.findByLabelText("click-me");
    expect(labelText).toBeInTheDocument();
  });

  test("finds an element by its placeholder text", async () => {
    render(<FindByQueries />);

    const placeholderText = await screen.findByPlaceholderText("Enter text here");
    expect(placeholderText).toBeInTheDocument();
  });

  test("finds an element by its alt text", async () => {
    render(<FindByQueries />);

    const altText = await screen.findByAltText("test-image");
    expect(altText).toBeInTheDocument();
  });

  test("finds an element by its defaultValue text", async () => {
    render(<FindByQueries />);

    const displayValue = await screen.findByDisplayValue("This is a test input");
    expect(displayValue).toBeInTheDocument();
  });

  test("finds an element by its custom-testid text", async () => {
    render(<FindByQueries />);

    const customElement = await screen.findByTestId("test-element");
    expect(customElement).toBeInTheDocument();
  });

  test("finds an element by its htmlfor label", async () => {
    render(<FindByQueries />);

    const labelhtmlforText = await screen.findByLabelText("Test Input Label");
    expect(labelhtmlforText).toBeInTheDocument();
  });

});
