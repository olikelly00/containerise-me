import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./src/components/components"; // Replace with your actual component

test("renders an h2 element", () => {
  render(<Header />); // Render your component

  // Look for the h2 element
  const h2Element = screen.getByRole("heading", { level: 2 });

  // Check if the h2 element is in the document
  expect(h2Element).toBeInTheDocument();
});

// test("does render h2 component on landing page", async (done) => {
//     const { queryByText } = render(<Header />);
//     await waitFor(() => {
//         expect(queryByText("Templates")).toExist();
//         done();
//     });
// });
