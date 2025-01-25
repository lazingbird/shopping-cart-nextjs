import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "./page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<About />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it("renders a link", () => {
    render(<About />);

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
  });
});
