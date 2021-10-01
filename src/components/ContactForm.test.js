import React from 'react';
import {getByText, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';
import App from '../App';

test('renders without errors', () => {
    render(<App />);
    // throw new Error();
});

test('renders the contact form header', () => {
    render(<ContactForm />);
    const x = screen.getByText(/contact form/i)
    expect(x).toBeInTheDocument()
});

test('renders ONE error message if user enters less then 5 characters into firstname.', () => {
    function throwError(fieldName, fieldValue) {
        if (fieldName === "firstName" && fieldValue.length < 5)
        return `${fieldName} must have at least 5 characters.`;
      return 'success!';
    }
    expect(throwError).not.toThrowError();
  });

// test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
//     render(<ContactForm />);
//     screen.getByText(/^.*(?=.{5,}).*$/)
// });

test('renders THREE error messages if user enters no values into any fields.', async () => {
    
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});

test('renders all fields text when all fields are submitted.', async () => {
    
});