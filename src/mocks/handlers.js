import { http } from 'msw';

const serverBaseUrl = 'http://localhost:3030';
export const handlers = [
  http.get(serverBaseUrl + '/', () => {
    console.log('its a request');
  }),
];
