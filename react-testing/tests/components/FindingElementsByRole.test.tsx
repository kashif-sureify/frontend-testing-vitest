import { render, screen } from "@testing-library/react";
import FindingElementsByRole from "../../src/components/FindingElementsByRole";

describe("findingElementByRole", () => {
  it("should query the link element", () => {
    render(<FindingElementsByRole />);
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("should query the button element", () => {
    render(<FindingElementsByRole />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should query the footer element", () => {
    render(<FindingElementsByRole />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("should query the heading h1 element", () => {
    render(<FindingElementsByRole />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("should query the banner element", () => {
    render(<FindingElementsByRole />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("should query the image element", () => {
    render(<FindingElementsByRole />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should query the input number spinbutton element", () => {
    render(<FindingElementsByRole />);
    expect(screen.getByRole("spinbutton")).toBeInTheDocument();
  });

  it("should query the ul element", () => {
    render(<FindingElementsByRole />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("should query the li element", () => {
    render(<FindingElementsByRole />);
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });
});
