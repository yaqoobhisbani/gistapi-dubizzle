import React from "react";
import { render } from "@testing-library/react";
import Gist from "./Gist";

describe("Gist", () => {
  test("matches snapshot", () => {
    const gist = {
      url: "https://api.github.com/gists/840386720b6a72d9e60dff8922f9747a",
      forks_url:
        "https://api.github.com/gists/840386720b6a72d9e60dff8922f9747a/forks",
      commits_url:
        "https://api.github.com/gists/840386720b6a72d9e60dff8922f9747a/commits",
      id: "840386720b6a72d9e60dff8922f9747a",
      node_id: "G_kwDOAYRM6toAIDg0MDM4NjcyMGI2YTcyZDllNjBkZmY4OTIyZjk3NDdh",
      git_pull_url:
        "https://gist.github.com/840386720b6a72d9e60dff8922f9747a.git",
      git_push_url:
        "https://gist.github.com/840386720b6a72d9e60dff8922f9747a.git",
      html_url:
        "https://gist.github.com/GrahamcOfBorg/840386720b6a72d9e60dff8922f9747a",
      files: "{Potential Maintainers: {…}}",
      public: true,
      created_at: "2023-03-30T21:44:05Z",
      updated_at: "2023-03-30T21:44:05Z",
      description: "test",
      comments: 0,
      user: null,
      comments_url:
        "https://api.github.com/gists/840386720b6a72d9e60dff8922f9747a/comments",
      owner: '{avatar_url: "https://avatars.githubusercontent.com…}',
      truncated: false,
    };

    const { container, getByText } = render(<Gist gist={gist} />);
    const textElement = getByText(gist.description);
    expect(textElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
