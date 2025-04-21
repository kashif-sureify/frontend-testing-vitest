import HelloWorld from "../../src/components/HelloWorld";
import { render, screen } from "@testing-library/react";

describe("Hello World Component", () => {
  it("should render a Hello World component", () => {
    render(<HelloWorld />);
    expect(screen.getByText("HelloWorld")).toBeInTheDocument();
  });
});
