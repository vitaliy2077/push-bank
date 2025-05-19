const container = document.getElementById('card');
const scrollAmount = 300;

function scrollLeftt() {
  container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}

function scrollRight() {
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}
const creditImage = document.querySelector('.credit_image');
const containerCredit = document.querySelector('.container_credit');

creditImage.addEventListener('mouseenter', () => {
  containerCredit.style.backgroundColor = 'rgba(245, 198, 235, 1)';
});

creditImage.addEventListener('mouseleave', () => {
  containerCredit.style.backgroundColor = '';
});
function viewDivOne() {
  document.getElementById("countryBack").style.backgroundImage = "url('image/yu-kato-824OwkP7sgk-unsplash_3_11zon.webp')"
  document.getElementById("countryJp").style.display = "flex";
  document.getElementById("countryDb").style.display = "none";
  document.getElementById("countryKr").style.display = "none";
  document.getElementById("countryMd").style.display = "none";

};
function viewDivTwo() {
  document.getElementById("countryBack").style.backgroundImage = "url('image/wael-hneini-QJKEa9n3yN8-unsplash_4_11zon.webp')";
  document.getElementById("countryJp").style.display = "none";
  document.getElementById("countryDb").style.display = "flex";
  document.getElementById("countryKr").style.display = "none";
  document.getElementById("countryMd").style.display = "none";

};
function viewDivThree() {
  document.getElementById("countryBack").style.backgroundImage = "url('image/yohan-cho-Mwvhyd22Lyw-unsplash_5_11zon.webp')";
  document.getElementById("countryJp").style.display = "none";
  document.getElementById("countryDb").style.display = "none";
  document.getElementById("countryKr").style.display = "flex";
  document.getElementById("countryMd").style.display = "none";

};
function viewDivFour() {
  document.getElementById("countryBack").style.backgroundImage = "url('image/mike-swigunski-k9Zeq6EH_bk-unsplash_2_11zon.webp')";
  document.getElementById("countryJp").style.display = "none";
  document.getElementById("countryDb").style.display = "none";
  document.getElementById("countryKr").style.display = "none";
  document.getElementById("countryMd").style.display = "flex";

};
document.getElementById("myVideo").playbackRate = 4;
document.getElementById("myVideoDark").playbackRate = 4;

const username = localStorage.getItem('user') || 'Войти';
document.getElementById('username').textContent = username;
function logout() {
  window.location.href = "login/index.html";
}
