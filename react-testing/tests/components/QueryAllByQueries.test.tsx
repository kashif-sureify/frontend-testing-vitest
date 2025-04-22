import { render, screen } from "@testing-library/react";
import QueryAllByQueries from "../../src/components/QueryAllByQueries";

describe("QueryAllByQueries", () => {
  it("should query all by role", () => {
    render(<QueryAllByQueries />);

    const buttons = screen.queryAllByRole("button");
    const alerts = screen.queryAllByRole("alert");
    const regions = screen.queryAllByRole("region");

    expect(buttons).toHaveLength(2);
    expect(alerts).toHaveLength(2);
    expect(regions).toHaveLength(2);
  });

  it("should query all by placeholder", () => {
    render(<QueryAllByQueries />);

    const inputsByLabel = screen.queryAllByPlaceholderText(/Enter text here/i);
    const searchInputs = screen.queryAllByPlaceholderText(/Search/i);
    const emailInputs = screen.queryAllByPlaceholderText(/Email/i);

    inputsByLabel.forEach((input) => {
      expect(input).toBeInTheDocument();
    });

    expect(inputsByLabel).toHaveLength(3);
    expect(searchInputs).toHaveLength(3);
    expect(emailInputs).toHaveLength(1);

  });

  it("should query all by texts", () => {
    render(<QueryAllByQueries />);

    const headings = screen.queryAllByText(/Header Text /i);
    const paragraphs = screen.queryAllByText(/This is some paragraph text /i);

 
    headings.forEach((heading) => {
      expect(heading).toBeInTheDocument();
    });

    paragraphs.forEach((para) => {
        expect(para).toBeInTheDocument();
      });

    expect(headings).toHaveLength(2);
    expect(paragraphs).toHaveLength(2);

  });

  it("should query all by testid", () => {
    render(<QueryAllByQueries />);

    const customElements = screen.queryAllByTestId(/custom-element/i);
    
    customElements.forEach((custom) => {
      expect(custom).toBeInTheDocument();
    });
    
    expect(customElements.length).toBeGreaterThanOrEqual(2);

  });

  it("should query all by display value", () => {
    render(<QueryAllByQueries />);

    const displayValue1 = screen.queryAllByDisplayValue(/Pre-filled Text 1/i);
    const displayValues = screen.queryAllByDisplayValue(/Pre-filled Text /i);

    
    displayValue1.forEach((value) => {
      expect(value).toBeInTheDocument();
    });
    displayValues.forEach((value) => {
        expect(value).toBeInTheDocument();
      });
    
    expect(displayValue1).toHaveLength(2);
    expect(displayValues).toHaveLength(3);


  });
});
