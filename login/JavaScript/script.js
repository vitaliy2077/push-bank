function showRegister() {
  document.getElementById('loginForm').classList.remove('active');
  document.getElementById('registerForm').classList.add('active');
}

function showLogin() {
  document.getElementById('registerForm').classList.remove('active');
  document.getElementById('loginForm').classList.add('active');
}

function register() {
  const username = document.getElementById('registerUsername').value.trim();
  const password = document.getElementById('registerPassword').value.trim();

  if (username && password) {
    localStorage.setItem('user', username);
    localStorage.setItem('pass', password);
    window.location.href = "../index.html";
  } else {
    alert("Введите имя и пароль");
  }
}

function login() {
  const inputUser = document.getElementById('loginUsername').value.trim();
  const inputPass = document.getElementById('loginPassword').value.trim();
  const savedUser = localStorage.getItem('user');
  const savedPass = localStorage.getItem('pass');

  if (inputUser === savedUser && inputPass === savedPass) {
    window.location.href = "../index.html";
  } else {
    alert("Неверное имя или пароль");
  }
}
