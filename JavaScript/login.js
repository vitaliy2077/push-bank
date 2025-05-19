const username = localStorage.getItem('user') || 'Войти';
document.getElementById('username').textContent = username;
function logout() {
  window.location.href = "../login/index.html";
}