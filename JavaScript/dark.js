function viewDivFive() {
  document.getElementById("Burg").style.display = "flex";

};
function viewDivSix() {
  document.getElementById("Burg").style.display = "none";

};
let darkModeEnabled = false;

function toggleDarkMode() {
  const existing = document.getElementById("dark-style");
  const currentPath = window.location.pathname;
  let cssPath = "";
  let iconPath = "";
  let iconMoonPath = "";

  if (currentPath.includes("/login/")) {
    cssPath = "../style/dark.css";
    iconPath = "../image/solid-black-sun-symbol.png";
    iconMoonPath = "../image/moons.png";
  }  else if (currentPath.includes("/store/")) {
    cssPath = "../style/dark.css";
    iconPath = "../image/solid-black-sun-symbol.png";
    iconMoonPath = "../image/moons.png";
  }
  else if (currentPath.includes("/iphone/")) {
    cssPath = "../style/dark.css";
    iconPath = "../image/solid-black-sun-symbol.png";
    iconMoonPath = "../image/moons.png";
  } else if (currentPath.includes("/gallery/")) {
    cssPath = "../style/dark.css";
    iconPath = "../image/solid-black-sun-symbol.png";
    iconMoonPath = "../image/moons.png";
  } else {
    cssPath = "style/dark.css";
    iconPath = "image/solid-black-sun-symbol.png";
    iconMoonPath = "image/moons.png";
  }

  if (!darkModeEnabled) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssPath;
    link.id = "dark-style";
    document.head.appendChild(link);
  } else {
    if (existing) existing.remove();
  }

  const block1 = document.getElementById("myVideo");
  const block2 = document.getElementById("myVideoDark");

  if (block1 && block2) {
    block1.style.display = darkModeEnabled ? "flex" : "none";
    block2.style.display = darkModeEnabled ? "none" : "flex";
  }

  const themeIcon = document.getElementById("themeIcon");
  if (themeIcon) {
    themeIcon.src = darkModeEnabled ? iconMoonPath : iconPath;
  }

  darkModeEnabled = !darkModeEnabled;
}
