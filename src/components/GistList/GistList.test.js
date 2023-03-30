import React from "react";
import { render } from "@testing-library/react";
import GistList from "./GistList";

describe("GistList", () => {
  const gists = [
    {
      id: "1",
      description: "Gist 1",
      files: {},
      owner: {
        login: "user1",
        avatar_url: "https://example.com/avatar1.jpg",
      },
    },
    {
      id: "2",
      description: "Gist 2",
      files: {},
      owner: {
        login: "user2",
        avatar_url: "https://example.com/avatar2.jpg",
      },
    },
  ];

  test("matches snapshot", () => {
    const { container } = render(<GistList gists={gists} />);
    expect(container).toMatchSnapshot();
  });
});
