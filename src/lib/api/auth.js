import client from './client';

export const check = token =>{
  return client.get('/user/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })};
