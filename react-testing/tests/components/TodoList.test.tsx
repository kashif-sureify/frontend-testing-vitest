import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../../src/components/TodoList";

describe("TodoList Component", () => {
  beforeEach(() => {
    render(<TodoList />);
  });
  test("renders TodoLists with an input and a button", async () => {
    const input = screen.getByPlaceholderText("Enter new todo");
    const button = screen.getByRole("button", { name: "Add Todo" });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("can add new todo item", async () => {
    const input = screen.getByPlaceholderText("Enter new todo");
    const button = screen.getByRole("button", { name: "Add Todo" });

    await userEvent.type(input, "New Todo");
    await userEvent.click(button);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("can mark a todo as completed", async () => {
    const input = screen.getByPlaceholderText("Enter new todo");
    const button = screen.getByRole("button", { name: "Add Todo" });

    await userEvent.type(input, "New Todo");
    await userEvent.click(button);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);

    const todoItem = screen.getByText("New Todo");
    expect(todoItem).toHaveStyle("text-decoration:line-through");
  });

  test("it can delete a todo item", async () => {
    const input = screen.getByPlaceholderText("Enter new todo");
    const button = screen.getByRole("button", { name: "Add Todo" });

    await userEvent.type(input, "New Todo");
    await userEvent.click(button);

    const deleteButton = screen.getByRole("button", { name: "Delete" });
    await userEvent.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText("New Todo")).not.toBeInTheDocument();
    });
  });
});
