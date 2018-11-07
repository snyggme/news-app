class Auth {
  login(id) {
    localStorage.setItem('authenticated', true);
    localStorage.setItem('userId', id);
  }
  logout() {
    localStorage.setItem('authenticated', false);
    delete localStorage['userId'];
  }
  isAuthenticated() {
    return localStorage.getItem('authenticated') === 'true'
  }
  getId() {
    return +localStorage.getItem('userId');
  }
  clearAll() {
    delete localStorage['authenticated'];
    delete localStorage['userId'];
  }
}

export default new Auth();