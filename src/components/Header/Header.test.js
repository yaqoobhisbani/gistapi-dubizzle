import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  test("renders stop icon", () => {
    const { getByTestId } = render(<Header />);
    const iconElement = getByTestId("icon");
    expect(iconElement).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
