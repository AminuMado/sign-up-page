const toggleSwitch = document.querySelector('input[type="checkbox"]');

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

// logic for moving the sign up page
const signUpBtn = document.querySelector("#sign-up-btn");
const logInBtn = document.querySelector("#log-in-btn");
console.log(signUpBtn);
console.log(logInBtn);

function changeClass() {
  const signUpPage = document.querySelector(".sign-up-page");
  console.log(signUpPage);
  if (signUpPage.classList.contains("left")) {
    signUpPage.classList.remove("left");
    signUpPage.classList.add("right");
  } else {
    signUpPage.classList.remove("right");
    signUpPage.classList.add("left");
  }
}
logInBtn.addEventListener("click", changeClass);
signUpBtn.addEventListener("click", changeClass);
