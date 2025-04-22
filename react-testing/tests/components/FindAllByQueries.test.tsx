import { render, screen } from "@testing-library/react";
import FindAllByQueries from "../../src/components/findAllByQueries";

describe("FindAllByQueries Component", () => {
  beforeEach(() => {
    render(<FindAllByQueries />);
  });
  it("findAll elements by text", async () => {
    const heading = await screen.findAllByText(/FindAllBy Queries Test/i);
    const paragraph = await screen.findAllByText(/Item \d/i);

    heading.forEach((head) => {
      expect(head).toBeInTheDocument();
    });

    paragraph.forEach((para) => {
      expect(para).toBeInTheDocument();
    });

    expect(heading).toHaveLength(1);
    expect(paragraph).toHaveLength(3);
  });

  it("findAll elements by label text", async () => {
    const buttonsLabel = await screen.findAllByLabelText(/click-me/i);

    buttonsLabel.forEach((button) => {
      expect(button).toBeInTheDocument();
    });

    expect(buttonsLabel).toHaveLength(3);
  });

  it("findAll elements by role text", async () => {
    const buttonsByRole = await screen.findAllByRole("button");

    buttonsByRole.forEach((button) => {
      expect(button).toBeInTheDocument();
    });

    expect(buttonsByRole).toHaveLength(3);
  });

  test("findAll elements by placeholder text", async () => {
    const placeholderText = await screen.findAllByPlaceholderText(
      /Enter text here/i
    );

    placeholderText.forEach((place) => {
      expect(place).toBeInTheDocument();
    });

    expect(placeholderText).toHaveLength(3);
  });

  test("findAll elements by alt text", async () => {
    const altText = await screen.findAllByAltText(/test-image/i);

    altText.forEach((alt) => {
      expect(alt).toBeInTheDocument();
    });

    expect(altText).toHaveLength(3);
  });

  test("findAll elements by defaultValue text", async () => {
    const displayValue = await screen.findAllByDisplayValue(/Test input \d/i);

    displayValue.forEach((value) => {
      expect(value).toBeInTheDocument();
    });

    expect(displayValue).toHaveLength(3);
  });

  test("findAll elements by custom testid value", async () => {
    const testid = await screen.findAllByTestId(/test-element/i);

    testid.forEach((test) => {
      expect(test).toBeInTheDocument();
    });

    expect(testid).toHaveLength(3);
  });
});
