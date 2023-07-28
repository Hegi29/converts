import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import App from './App';

test('renders input field', () => {
  render(<App />);
  const inputField = screen.getByPlaceholderText(/please input number/i);
  expect(inputField).toBeInTheDocument();
});

test('renders button convert & reset', () => {
  render(<App />);
  const buttonConvert = screen.getByText(/convert/i);
  const buttonReset = screen.getByText(/reset/i);
  expect(buttonConvert).toBeInTheDocument();
  expect(buttonReset).toBeInTheDocument();
});

test('renders results title', () => {
  render(<App />);
  const title = screen.getByText(/results/i);
  expect(title).toBeInTheDocument();
});

test('(hundred) results 123.45 should be “ ONE HUNDRED AND TWENTY-THREE DOLLARS AND FORTY-FIVE CENTS ”', () => {
  render(<App />);

  const inputValue = 123.45;

  const inputField = screen.getByPlaceholderText(/please input number/i);

  fireEvent.change(inputField, { target: { value: inputValue } });
  fireEvent.click(screen.getByText(/convert/i));

  const resultText = screen.getByTestId(/result/i).textContent.trim();

  expect(resultText).toBe(`" ONE HUNDRED AND TWENTY-THREE DOLLARS AND FORTY-FIVE CENTS "`);
});

test('(thousand) converts results 123.123.45 should be “ ONE HUNDRED AND TWENTY-THREE THOUSAND ONE HUNDRED AND TWENTY-THREE DOLLARS AND FORTY-FIVE CENTS ”', () => {
  render(<App />);

  const inputValue = 123123.45;

  const inputField = screen.getByPlaceholderText(/please input number/i);

  fireEvent.change(inputField, { target: { value: inputValue } });
  fireEvent.click(screen.getByText(/convert/i));

  const resultText = screen.getByTestId(/result/i).textContent.trim();

  expect(resultText).toBe(`" ONE HUNDRED AND TWENTY-THREE THOUSAND ONE HUNDRED AND TWENTY-THREE DOLLARS AND FORTY-FIVE CENTS "`);
});

test('(million) converts results 123.123.123.45 should be “ ONE HUNDRED AND TWENTY-THREE MILLION ONE HUNDRED AND TWENTY-THREE THOUSAND ONE HUNDRED AND TWENTY-THREE DOLLARS AND FORTY-FIVE CENTS ”', () => {
  render(<App />);

  const inputValue = 123123123.45;

  const inputField = screen.getByPlaceholderText(/please input number/i);

  fireEvent.change(inputField, { target: { value: inputValue } });
  fireEvent.click(screen.getByText(/convert/i));

  const resultText = screen.getByTestId(/result/i).textContent.trim();

  expect(resultText).toBe(`" ONE HUNDRED AND TWENTY-THREE MILLION ONE HUNDRED AND TWENTY-THREE THOUSAND ONE HUNDRED AND TWENTY-THREE DOLLARS AND FORTY-FIVE CENTS "`);
});

test('(Billion) converts results 123.123.123.123.45 should be “ ONE HUNDRED AND TWENTY-THREE MILLION ONE HUNDRED AND TWENTY-THREE THOUSAND ONE HUNDRED AND TWENTY-THREE DOLLARS AND FORTY-FIVE CENTS ”', () => {
  render(<App />);

  const inputValue = 123123123123.45;

  const inputField = screen.getByPlaceholderText(/please input number/i);

  fireEvent.change(inputField, { target: { value: inputValue } });
  fireEvent.click(screen.getByText(/convert/i));

  const resultText = screen.getByTestId(/result/i).textContent.trim();

  expect(resultText).toBe(`" ONE HUNDRED AND TWENTY-THREE BILLION ONE HUNDRED AND TWENTY-THREE MILLION ONE HUNDRED AND TWENTY-THREE THOUSAND ONE HUNDRED AND TWENTY-THREE DOLLARS AND FORTY-FIVE CENTS "`);
});

test('(Trillion) converts results 123.123.123.123.123.45 should be “ ONE HUNDRED AND TWENTY-THREE TRILLION ONE HUNDRED AND TWENTY-THREE BILLION ONE HUNDRED AND TWENTY-THREE MILLION ONE HUNDRED AND TWENTY-THREE THOUSAND ONE HUNDRED AND TWENTY-THREE DOLLARS AND FORTY-FIVE CENTS ”', () => {
  render(<App />);

  const inputValue = 123123123123123.45;

  const inputField = screen.getByPlaceholderText(/please input number/i);

  fireEvent.change(inputField, { target: { value: inputValue } });
  fireEvent.click(screen.getByText(/convert/i));

  const resultText = screen.getByTestId(/result/i).textContent.trim();

  expect(resultText).toBe(`" ONE HUNDRED AND TWENTY-THREE TRILLION ONE HUNDRED AND TWENTY-THREE BILLION ONE HUNDRED AND TWENTY-THREE MILLION ONE HUNDRED AND TWENTY-THREE THOUSAND ONE HUNDRED AND TWENTY-THREE DOLLARS AND FORTY-FIVE CENTS "`);
});

test('(Quadrillion) converts results 123.123.123.123.123.123.45 should be “ ONE HUNDRED AND TWENTY-THREE QUADRILLION ONE HUNDRED AND TWENTY-THREE TRILLION ONE HUNDRED AND TWENTY-THREE BILLION ONE HUNDRED AND TWENTY-THREE MILLION ONE HUNDRED AND TWENTY-THREE THOUSAND ONE HUNDRED AND TWENTY-THREE DOLLARS AND FORTY-FIVE CENTS ”', async () => {
  render(<App />);

  const inputValue = 123123123123123123.45;

  const inputField = screen.getByPlaceholderText(/please input number/i);

  fireEvent.change(inputField, { target: { value: inputValue } });
  fireEvent.click(screen.getByText(/convert/i));

  setTimeout(() => {
    expect(screen.getByText(`" ONE HUNDRED AND TWENTY-THREE QUADRILLION ONE HUNDRED AND TWENTY-THREE TRILLION ONE HUNDRED AND TWENTY-THREE BILLION ONE HUNDRED AND TWENTY-THREE MILLION ONE HUNDRED AND TWENTY-THREE THOUSAND ONE HUNDRED AND TWENTY-THREE DOLLARS AND FORTY-FIVE CENTS "`)).toBeVisible();
  }, 1000);
});

test('(Quintillion) converts results 123.123.123.123.123.123.123.45 should be “ ONE HUNDRED AND TWENTY-THREE QUINTILLION ONE HUNDRED AND TWENTY-THREE QUADRILLION ONE HUNDRED AND TWENTY-THREE TRILLION ONE HUNDRED AND TWENTY-THREE BILLION ONE HUNDRED AND TWENTY-THREE MILLION ONE HUNDRED AND TWENTY-THREE THOUSAND ONE HUNDRED AND TWENTY-THREE DOLLARS AND FOURTY-FIVE CENTS ”', () => {
  render(<App />);

  const inputValue = 123123123123123123123.45;

  const inputField = screen.getByPlaceholderText(/please input number/i);

  fireEvent.change(inputField, { target: { value: inputValue } });
  fireEvent.click(screen.getByText(/convert/i));

  setTimeout(() => {
    expect(screen.getByText(`" ONE HUNDRED AND TWENTY-THREE QUINTILLION ONE HUNDRED AND TWENTY-THREE QUADRILLION ONE HUNDRED AND TWENTY-THREE TRILLION ONE HUNDRED AND TWENTY-THREE BILLION ONE HUNDRED AND TWENTY-THREE MILLION ONE HUNDRED AND TWENTY-THREE THOUSAND ONE HUNDRED AND TWENTY-THREE DOLLARS AND FOURTY-FIVE CENTS "`)).toBeVisible();
  }, 1000);
});

test('(Sextillion) converts results 123.123.123.123.123.123.123.123.45 should be “ ONE HUNDRED AND TWENTY-THREE SEXTILLION ONE HUNDRED AND TWENTY-THREE QUINTILLION ONE HUNDRED AND TWENTY-THREE QUADRILLION ONE HUNDRED AND TWENTY-THREE TRILLION ONE HUNDRED AND TWENTY-THREE BILLION ONE HUNDRED AND TWENTY-THREE MILLION ONE HUNDRED AND TWENTY-THREE THOUSAND ONE HUNDRED AND TWENTY-THREE DOLLARS AND FOURTY-FIVE CENTS ”', () => {
  render(<App />);

  const inputValue = 123123123123123123123123.45;

  const inputField = screen.getByPlaceholderText(/please input number/i);

  fireEvent.change(inputField, { target: { value: inputValue } });
  fireEvent.click(screen.getByText(/convert/i));

  setTimeout(() => {
    expect(screen.getByText(`" ONE HUNDRED AND TWENTY-THREE SEXTILLION ONE HUNDRED AND TWENTY-THREE QUINTILLION ONE HUNDRED AND TWENTY-THREE QUADRILLION ONE HUNDRED AND TWENTY-THREE TRILLION ONE HUNDRED AND TWENTY-THREE BILLION ONE HUNDRED AND TWENTY-THREE MILLION ONE HUNDRED AND TWENTY-THREE THOUSAND ONE HUNDRED AND TWENTY-THREE DOLLARS AND FOURTY-FIVE CENTS "`)).toBeVisible();
  }, 1000);
});
