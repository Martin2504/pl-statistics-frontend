import axios from "axios";

const API_URL = "http://localhost:8080/api/";

class AuthService {

  login(username: string, password: string) {
    return axios
      .post(API_URL + "authenticate", {
        username,
        password
      })
      .then(response => {
        if (response.status === 200 && response.data.token) {
          localStorage.setItem("token", response.data.token);
        }
        return response.data;
      });
  }

  logout(): void {
    localStorage.removeItem("token");
  }

  register(username: string, password: string): Promise<object> {
    return axios.post(API_URL + "register", {
      username,
      password
    })
  }

  getCurrentUser(): string | null {
    const token = localStorage.getItem('token');
    if (token === null) {
      return null;
    }
    return token;
  }
}

export default new AuthService();
