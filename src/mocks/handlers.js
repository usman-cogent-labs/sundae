import { http, HttpResponse } from 'msw';

const serverBaseUrl = 'http://localhost:3030';
export const handlers = [
  http.get(serverBaseUrl + '/scoops', () => {
    return HttpResponse.json([
      { name: 'Chocolate', imagePath: '/images/chocolate' },
      { name: 'Vanilla', imagePath: '/images/vanilla' },
    ]);
  }),
];
