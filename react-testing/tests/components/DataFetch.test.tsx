import { render, screen } from "@testing-library/react";
import TodoList from "../../src/components/DataFetch";
import { server } from "../mocks/server";
import { http, HttpResponse } from "msw";

describe("DataFetching TodoList", () => {
  test("should render a list of todos", async () => {
    render(<TodoList />);
    const todolist = await screen.findByRole("list");
    const todoItems = await screen.findAllByRole("listitem");

    expect(todolist).toBeInTheDocument();
    expect(todoItems.length).toBeGreaterThan(0);
  });

  test("should render no todos available if no list of todos found", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/todos", () => {
        HttpResponse.json([]);
      })
    );
  });

  test("should render a loading if products are loading", () => {
    render(<TodoList />);
    const loading = screen.getByText(/loading/i);

    expect(loading).toBeInTheDocument();
  });
});
