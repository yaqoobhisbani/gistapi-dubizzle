import React from "react";
import { render } from "@testing-library/react";
import Error from "./Error";

describe("Error", () => {
  test("renders default message when no message prop is passed", () => {
    const { getByText } = render(<Error />);
    const messageElement = getByText(
      "Something went wrong! Please try again later."
    );
    expect(messageElement).toBeInTheDocument();
  });

  test("renders custom message when message prop is passed", () => {
    const customMessage = "Oops, something unexpected happened!";
    const { getByText } = render(<Error message={customMessage} />);
    const messageElement = getByText(customMessage);
    expect(messageElement).toBeInTheDocument();
  });

  test("renders stop icon", () => {
    const { getByTestId } = render(<Error />);
    const iconElement = getByTestId("stop-icon");
    expect(iconElement).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(<Error />);
    expect(container).toMatchSnapshot();
  });
});
