import React from "react";
import { render, fireEvent } from "@testing-library/react";
import IconLink from "./IconLink";

describe("IconLink", () => {
  test("renders icon and label with link", () => {
    const label = "Files";
    const icon = "code";
    const link = "http://localhost/";
    const { getByText, getByTestId } = render(
      <IconLink label={label} icon={icon} link={link} />
    );
    const iconElement = getByTestId("icon");
    const labelElement = getByText(label);
    expect(iconElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(labelElement.href).toBe(link);
  });

  test("clicking label triggers link", () => {
    const label = "Files";
    const icon = "code";
    const link = "http://localhost/";
    const { getByText } = render(
      <IconLink label={label} icon={icon} link={link} />
    );
    const labelElement = getByText(label);
    fireEvent.click(labelElement);
    expect(window.location.href).toBe(link);
  });

  test("matches snapshot", () => {
    const label = "Files";
    const icon = "code";
    const link = "http://localhost/";
    const { container } = render(
      <IconLink label={label} icon={icon} link={link} />
    );
    expect(container).toMatchSnapshot();
  });
});
