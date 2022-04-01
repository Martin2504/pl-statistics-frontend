import User from "../interfaces/User";

export default function authHeader() {
  const token: string | null = localStorage.getItem('token') ? localStorage.getItem('token') : null;
  if (token) {
    return {
      "Authorization": "Bearer " + token,
      "Access-Control-Allow-Origin": "*"
    }; // for Spring Boot Auth
  } else {
    return undefined;
  }
}

