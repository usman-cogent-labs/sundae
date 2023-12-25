import { screen, fireEvent, render } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

test('checkbox is unchecked by default', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /i agree to terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();
});

test('checkbox enables the button', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /i agree to terms and conditions/i,
  });
  fireEvent.click(checkbox);
  const button = screen.getByRole('button', { name: /confirm order/i });
  expect(button).toBeEnabled();
});

test('Clicking checkbox again will disable the button', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /i agree to terms and conditions/i,
  });
  fireEvent.click(checkbox);
  fireEvent.click(checkbox);
  const button = screen.getByRole('button', { name: /confirm order/i });
  expect(button).toBeDisabled();
});
