import React from "react";
import { render } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading", () => {
  test("renders loading text", () => {
    const { getByText } = render(<Loading />);
    const textElement = getByText("Loading");
    expect(textElement).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
