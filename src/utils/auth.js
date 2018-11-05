class Auth {
  login() {
    localStorage.setItem('authenticated', true);
  }
  logout() {
    localStorage.setItem('authenticated', false);
  }
  isAuthenticated() {
    return localStorage.getItem('authenticated') === 'true';
  }
  clear() {
    delete localStorage['authenticated'];
  }
}

export default new Auth();