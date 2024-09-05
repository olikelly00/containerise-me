import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page.js"


test('renders Next.js logo', () => {
  render(<Home />);
  
  // Check if the Next.js logo is rendered
  const nextLogo = screen.getByAltText('Next.js Logo');
  expect(nextLogo).toBeInTheDocument();
});