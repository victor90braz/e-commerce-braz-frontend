import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

describe("App Component", () => {
  describe("Rendering", () => {
    test("should render the App component with a header", () => {
      render(<App />);
      const headerElement = screen.getByRole("heading", {
        name: "e-commerce braz",
      });
      expect(headerElement).toBeInTheDocument();
    });
  });
});
