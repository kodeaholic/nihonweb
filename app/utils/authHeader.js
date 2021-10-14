import { get } from 'lodash';
export async function authHeader() {
  let tokens = await localStorage.getItem('tokens');
  tokens = JSON.parse(tokens);
  const header = {
    'Content-Type': 'application/json',
  };
  const token = get(tokens, 'access.token');
  if (tokens && token) {
    header.Authorization = `Bearer ${token}`;
  }
  return header;
}
