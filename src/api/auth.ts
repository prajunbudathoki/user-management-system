import type { User } from "../types/user";

const testUser: User = {
  id: 1,
  email: "hello@gmail.com",
  role: "employee",
};

export async function getUser() {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );

  const authToken = generateAuthToken();

  return [200, { authToken, user: testUser }];
}

export async function login() {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );

  const authToken = generateAuthToken();

  return [200, { authToken, user: testUser }];
}

function generateAuthToken() {
  return Math.random().toString(36).substring(2);
}
