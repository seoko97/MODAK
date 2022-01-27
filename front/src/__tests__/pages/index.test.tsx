import React from "react";
import Home from "@src/pages/index";
import { screen, render } from "@testing-library/react";

describe("Home", () => {
  // success
  it("renders", () => {
    render(<Home />);

    const str = screen.getByText("Home");

    expect(str).toBeInTheDocument();
  });
});
