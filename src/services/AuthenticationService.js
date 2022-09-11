import axios from "axios";

const API_URL = "http://localhost:8080/users"

const auth = "user";
const EMAIL = "email";
const ID = "userId";
const USER_NAME = "username"

class AuthenticationService {
  executeBasicAuthenticationService(email, password) {
    return axios.get('http://localhost:8080/basicauth', {
      headers: { authorization: this.createBasicAuthToken(email, password) },
    });
  }

  createBasicAuthToken(email, password) {
    return "Basic " + window.btoa(email + ":" + password);
  }

  registerSuccessfulLogin(email, password) {
    const authToken = this.createBasicAuthToken(email, password);

    this.setupAxiosInterceptors(authToken);
    
    localStorage.setItem(EMAIL, email);
    localStorage.setItem(auth, authToken);
  }

  getUserDetails(email) {
    return axios.post(`${API_URL}/details`, {
      email: email,
    });
  }

  registerUserDetails(res) {
    localStorage.setItem(ID, res.data.id);
    localStorage.setItem(USER_NAME, res.data.username);
  }

  logout() {
    localStorage.clear();
  }

  isUserLoggedIn() {
    const user = localStorage.getItem("user");
    if (user) {
      return true;
    }
  }

  getLoggedInEmail() {
    return localStorage.getItem(EMAIL);
  }

  getLoggedInUserId() {
    return localStorage.getItem(ID);
  }

  getLoggedInUserName() {
    return localStorage.getItem(USER_NAME);
  }

  setupAxiosInterceptors(token) {
    axios.interceptors.request.use((config) => {
        config.headers.authorization = token;
      return config;
    });
  }
}

export default new AuthenticationService();