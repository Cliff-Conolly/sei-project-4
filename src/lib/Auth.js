import axios from 'axios'


class Auth {
  static setToken(token) {
    localStorage.setItem('token', token)
  }

  static getToken() {
    return localStorage.getItem('token')
  }

}

export const registerUser = (userData) => {
  axios.post('http://localhost:5000/api/register', {user: userData})


}
export default Auth
