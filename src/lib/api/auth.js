import client from './client';

export const check = token =>
  client.get('/user/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
