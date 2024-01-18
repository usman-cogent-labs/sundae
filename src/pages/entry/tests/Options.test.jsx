import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('displays image for each scope options from server ', async () => {
  render(<Options optionType={'scoops'} />);

  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages?.map((img) => img.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});
