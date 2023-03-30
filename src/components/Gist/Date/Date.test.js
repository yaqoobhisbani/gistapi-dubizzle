import React from "react";
import { render } from "@testing-library/react";
import Date from "./Date";

describe("Date", () => {
  test("renders label and formatted date", () => {
    const mockLabel = "Date:";
    const mockDate = "2023-03-30T20:51:53Z";
    const { getByText } = render(<Date label={mockLabel} date={mockDate} />);
    const labelElement = getByText(mockLabel);
    const dateElement = getByText("2/31/2023");
    expect(labelElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const mockLabel = "Date:";
    const mockDate = "2023-03-30T20:51:53Z";
    const { container } = render(<Date label={mockLabel} date={mockDate} />);
    expect(container).toMatchSnapshot();
  });
});
