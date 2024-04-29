import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import Task from "../components/Task";

test("displays the task text", () => {
  const task = { id:1, text: "Buy rice", category: "Groceries"};
  render(<Task task={task} />);
  expect(screen.queryByText("Buy rice")).toBeInTheDocument();
  expect(screen.queryByText("Groceries")).toBeInTheDocument();
});

test("displays the task category", () => {
  render(<Task text={"text!"} category={"category!"} />);
  expect(screen.queryByText("category!")).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", () => {
  const onDeleteMock = jest.fn();
  const task = { id:1, text: "Buy rice", category: "Groceries"};
  render(<Task task={task} onDelete={onDeleteMock}/>)
  

  const deleteButton = screen.getByRole("button", { name: "x"});


  fireEvent.click(deleteButton);

  expect(onDeleteMock).toHaveBeenCalledWith(1);
});
