import { rest } from 'msw';

const url = 'http://localhost:3000';

export const handlers = [
  rest.get(url + '/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'chocolate', imagePath: '/images/chocolate' },
        { name: 'vanialla', imagePath: '/images/vanialla' },
        { name: 'crunch', imagePath: '/images/crunch' },
      ])
    );
  }),
];
