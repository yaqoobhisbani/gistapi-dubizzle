import React from "react";
import { render } from "@testing-library/react";
import GistHeader from "./GistHeader";

describe("GistHeader", () => {
  test("matches snapshot", () => {
    const { container } = render(
      <GistHeader
        avatarURL="http://localhost:3000/avatar.png"
        commentsURL="http://localhost:3000/comments"
        login="yaqoobhisbani"
        loginURL="https://github.com/yaqoobhisbani"
        fileCount={3}
        forksURL="http://localhost:3000/forks"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
