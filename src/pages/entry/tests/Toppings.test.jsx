import { screen, render } from '@testing-library/react';
import Options from '../Options';

test('dispplays toppings for icecream', async () => {
  render(<Options optionType={'toppings'} />);

  const toppingImages = await screen.findAllByRole('img', {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  const imageAlts = toppingImages?.map((img) => img?.alt);
  expect(imageAlts).toEqual([
    'Chocolate topping',
    'Strawberry topping',
    'Cream topping',
  ]);
});
