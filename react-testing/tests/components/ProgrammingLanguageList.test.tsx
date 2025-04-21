import { render, screen } from "@testing-library/react";
import ProgrammingLanguageList from "../../src/components/ProgrammingLanguageList";

describe("UserStatus Component", () => {
  it("should render a programming list when a list is provided", () => {
    const languages = ["JavaScript", "Java", "C", "C++", "Python"];
    render(<ProgrammingLanguageList languages={languages} />);

    languages.map((language) => {
      expect(screen.getByText(language)).toBeInTheDocument();
    });
  });

  it("should render a message when no list is provided", () => {
    render(<ProgrammingLanguageList languages={[]} />);

    expect(
      screen.getByText(/No Programming languages found./i)
    ).toBeInTheDocument();
  });
});
