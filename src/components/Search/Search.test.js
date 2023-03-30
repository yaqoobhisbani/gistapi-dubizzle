import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Search from "./Search";

describe("Search component", () => {
  test("renders the search input", () => {
    const { getByPlaceholderText } = render(<Search />);
    const inputElement = getByPlaceholderText("Search Gists for the username");
    expect(inputElement).toBeInTheDocument();
  });

  test("calls onChange handler when search input changes", () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(
      <Search search="" onChange={mockOnChange} />
    );
    const inputElement = getByTestId("input");
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test("matches snapshot", () => {
    const { container } = render(<Search />);
    expect(container).toMatchSnapshot();
  });
});
