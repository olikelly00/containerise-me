// __tests__/Home.test.js

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  // for additional matchers like toBeInTheDocument
import Home from './page.js';  // Adjust the path according to your structure

describe('Home Component', () => {
  test('renders the Get started text', () => {
    render(<Home />);
    // Look for the 'Get started by editing' text in the component
    const getStartedText = screen.getByText(/Get started by editing/i);
    expect(getStartedText).toBeInTheDocument();
  });

  test('renders the Next.js logo', () => {
    render(<Home />);
    // Look for the Next.js logo with alt text 'Next.js Logo'
    const logo = screen.getByAltText('Next.js Logo');
    expect(logo).toBeInTheDocument();
  });

  test('renders the links with correct text', () => {
    render(<Home />);  // Render the Home component
  
    // Get all elements that contain "Learn" text
    const learnLinks = screen.getAllByText(/Learn/i);
  
    // Now you can check specific elements from the array
    // For example, check the first instance of "Learn"
    expect(learnLinks[0]).toBeInTheDocument();
  
    // You can also check for specific text in a different way if needed, 
    // or loop over the array to assert the different matches
  });
});