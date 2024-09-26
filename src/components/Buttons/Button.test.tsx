import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';  // Include jest-dom matchers
import Button from './Button';

// Describe a test suite for the Button component
describe('Button Component', () => {

  // Test case 1: Ensure the button renders with the correct label
  test('renders the button with correct label', () => {
    render(<Button variant="primary" label="Click Me" />);
    
    // Check if the button is in the document with the correct label
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  // Test case 2: Ensure the correct class for the variant is applied
  test('applies the correct class for the variant', () => {
    render(<Button variant="success" label="Success" />);
    
    // Check if the button has the class for the 'success' variant
    const buttonElement = screen.getByText(/Success/i);
    expect(buttonElement).toHaveClass('Button-success');
  });

  // // Test case 3: Simulate a click event and ensure the onClick handler is called
  // test('calls onClick handler when clicked', () => {
  //   const handleClick = jest.fn(); // Mock function for onClick
  //   render(<Button variant="primary" label="Click Me" onClick={handleClick} />);
    
  //   // Simulate a click event
  //   const buttonElement = screen.getByText(/Click Me/i);
  //   fireEvent.click(buttonElement);
    
  //   // Ensure the onClick function was called
  //   expect(handleClick).toHaveBeenCalledTimes(1);
  // });

  // Test case 4: Ensure the button is disabled when the disabled prop is true
  test('is disabled when the disabled prop is true', () => {
    render(<Button variant="primary" label="Disabled" disabled={true} />);
    
    // Ensure the button is disabled
    const buttonElement = screen.getByText(/Disabled/i);
    expect(buttonElement).toBeDisabled();
  });

  // Test case 5: Ensure the button is not disabled when the disabled prop is false
  test('is not disabled when the disabled prop is false', () => {
    render(<Button variant="primary" label="Enabled" disabled={false} />);
    
    // Ensure the button is enabled
    const buttonElement = screen.getByText(/Enabled/i);
    expect(buttonElement).not.toBeDisabled();
  });

});
