import axios from 'axios';

export interface User {
  id: number;
  name: string;
  email: string;
}

export async function fetchUser(userId: number): Promise<User> {
  const response = await axios.get<User>(`http://localhost:5000/users/${userId}`);
  return response.data;
}