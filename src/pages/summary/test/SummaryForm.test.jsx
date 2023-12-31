import {
  screen,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  userEvent.click(checkbox);
  const button = screen.getByRole('button', { name: /confirm order/i });
  expect(button).toBeEnabled();
});

test('Clicking checkbox again will disable the button', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /i agree to terms and conditions/i,
  });
  userEvent.click(checkbox);
  userEvent.click(checkbox);
  const button = screen.getByRole('button', { name: /confirm order/i });
  expect(button).toBeDisabled();
});

test('popover responds to hover', async () => {
  render(<SummaryForm />);
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  const termsAndConditions = screen.getByText(/terms and Conditions/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  userEvent.unhover(termsAndConditions);

  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
