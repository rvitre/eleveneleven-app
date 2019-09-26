import {
  GET,
  POST,
  PUT,
  PATCH,
  DEL,
  PREFIX_ACCOUNTS_SERVICE,
  API_ENDPOINT,
  REDIRECT
} from ".";

export async function login(email, password) {
  try {
    const response = await POST(
      PREFIX_ACCOUNTS_SERVICE + "v1/test/login" + REDIRECT,
      {
        user_id: email,
        credential: password
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}
