"use strict";
const background = document.querySelector(".main-header");
let slideIndex = 1;
const titleGeo = document.querySelector(".title-geo");

const titles = [
  ["შურისმაძიებლები: უსასრულობის ომი", "Avengers: Infinity War"],
  ["ადამიანი-ობობა", "Spider-man"],
  ["რკინის კაცი", "Iron Man"],
  ["თორი: რაგნაროკი", "Thor: Ragnarok"],
  ["სამეფო კარის თამაშები", "Game of Thrones"],
  ["ვიკინგები", "Vikings"],
];
const Balls = function (e) {
  const btn = e.className;
  let btnName = document.querySelector(`.btn${btn[btn.length - 1]}`);

  if (btn[0] === "p" && btn[btn.length - 1] === "1") {
    if (slideIndex === 1) {
      slideIndex = 6;
      btnName = document.querySelector(`.btn${slideIndex}`);
    } else {
      slideIndex -= 1;
      btnName = document.querySelector(`.btn${slideIndex}`);
    }
  } else if (btn[0] === "p" && btn[btn.length - 1] === "2") {
    if (slideIndex === 6) {
      slideIndex = 1;
      btnName = document.querySelector(`.btn${slideIndex}`);
    } else {
      slideIndex += 1;
      btnName = document.querySelector(`.btn${slideIndex}`);
    }
  }

  btnName.classList.add("btn-highlight");

  for (let i = 1; i <= 6; i++) {
    if (
      document.querySelector(`.btn${i}`).classList.contains("btn-highlight") &&
      Number(btnName.className[7]) !== i
    ) {
      document.querySelector(`.btn${i}`).classList.remove("btn-highlight");
    }
  }
  slideIndex = Number(btnName.className[7]);

  background.style.background = `rgba(0, 0, 0, 0.7) url(imgs/img${slideIndex}.jpg)`;
  background.style.width = "100%";
  background.style.backgroundPosition = "center";
  background.style.backgroundRepeat = "no-repeat";
  background.style.height = "70vh";
  background.style.backgroundSize = "cover";
  if (sessionStorage.getItem("lang")) {
    titleGeo.textContent = titles[slideIndex - 1][1];
  } else {
    titleGeo.textContent = titles[slideIndex - 1][0];
  }
};

function mobileTabletMenu() {
  let navbarContainer = document.createElement("div");

  navbarContainer.classList.add("navbar-mobile-tablet");
  navbarContainer.style.width = "60%";
  navbarContainer.style.height = "100%";
  navbarContainer.style.backgroundColor = "white";
  navbarContainer.style.position = "fixed";
  navbarContainer.style.top = "0";
  navbarContainer.style.zIndex = "10";

  let navbarContainerHeader = document.createElement("div");
  let close = document.createElement("i");
  let logo = document.createElement("img");

  navbarContainerHeader.classList.add("navbar-container-header");
  close.classList.add("ph-x");
  logo.classList.add("mobile-tablet-menu-logo");

  logo.src = "/imgs/adjaranet-logo.svg";
  logo.style.width = "150px";
  close.style.textAlign = "right";
  navbarContainerHeader.style.display = "flex";
  navbarContainerHeader.style.justifyContent = "space-between";
  navbarContainerHeader.style.padding = "20px 10px";

  close.onclick = function (e) {
    navbarContainer.parentNode.removeChild(navbarContainer);
  };

  let authContainer = document.createElement("div");
  let signIn = document.createElement("a");
  let signUp = document.createElement("a");

  authContainer.style.display = "flex";
  authContainer.style.justifyContent = "center";
  authContainer.style.gap = "20px";
  authContainer.style.padding = "0 10px";

  signIn.href = "signin.html";
  signUp.href = "signup.html";
  if (sessionStorage.getItem("lang")) {
    signIn.innerText = "Sign In";
    signUp.innerText = "Sign Up";
  } else {
    signIn.innerText = "ავტორიზაცია";
    signUp.innerText = "რეგისტრაცია";
  }
  signUp.classList.add("auth");
  signUp.classList.add("translate-signup-responsive");
  signIn.classList.add("auth");
  signIn.classList.add("translate-signin-responsive");

  let navbarContainerMain = document.createElement("div");

  let tvContainer = document.createElement("a");
  let tvContainerSvg = document.createElement("i");
  let tvContainerText = document.createElement("span");
  tvContainerSvg.classList.add("ph-television");
  tvContainerText.innerText = "TV";

  let filmsContainer = document.createElement("a");
  let filmsContainerSvg = document.createElement("i");
  let filmsContainerText = document.createElement("span");
  filmsContainerSvg.classList.add("ph-film-slate");
  if (sessionStorage.getItem("lang")) {
    filmsContainerText.innerText = "Movies";
  } else {
    filmsContainerText.innerText = "ფილმები";
  }

  let kidsContainer = document.createElement("a");
  let kidsContainerSvg = document.createElement("i");
  let kidsContainerText = document.createElement("span");
  kidsContainerSvg.classList.add("ph-baby");
  if (sessionStorage.getItem("lang")) {
    kidsContainerText.innerText = "Kids";
  } else {
    kidsContainerText.innerText = "საბავშვო";
  }

  navbarContainerMain.style.display = "flex";
  navbarContainerMain.style.flexDirection = "column";
  navbarContainerMain.style.marginTop = "30px";

  tvContainer.style.display = "flex";
  tvContainer.style.width = "100px";
  tvContainer.style.gap = "30px";
  tvContainer.style.alignItems = "center";
  tvContainer.style.cursor = "pointer";
  tvContainer.href = "TV.html";
  tvContainer.style.color = "black";

  filmsContainer.style.display = "flex";
  filmsContainer.style.width = "100px";
  filmsContainer.style.gap = "30px";
  filmsContainer.style.alignItems = "center";
  filmsContainer.style.cursor = "pointer";
  filmsContainer.href = "ფილმები.html";
  filmsContainer.style.color = "black";

  kidsContainer.style.display = "flex";
  kidsContainer.style.width = "100px";
  kidsContainer.style.gap = "30px";
  kidsContainer.style.alignItems = "center";
  kidsContainer.style.cursor = "pointer";
  kidsContainer.href = "საბავშვო.html";
  kidsContainer.style.color = "black";

  let body = document.getElementById("body");
  navbarContainerHeader.appendChild(close);
  navbarContainerHeader.appendChild(logo);

  authContainer.appendChild(signIn);
  authContainer.appendChild(signUp);

  tvContainer.appendChild(tvContainerSvg);
  tvContainer.appendChild(tvContainerText);
  filmsContainer.appendChild(filmsContainerSvg);
  filmsContainer.appendChild(filmsContainerText);
  kidsContainer.appendChild(kidsContainerSvg);
  kidsContainer.appendChild(kidsContainerText);

  navbarContainerMain.appendChild(tvContainer);
  navbarContainerMain.appendChild(filmsContainer);
  navbarContainerMain.appendChild(kidsContainer);

  navbarContainer.appendChild(navbarContainerHeader);
  navbarContainer.appendChild(authContainer);
  navbarContainer.appendChild(navbarContainerMain);

  body.appendChild(navbarContainer);
}

let date = new Date();
let currentDate = date.toISOString().slice(0, 10);
document.getElementById("date").value = currentDate;

const email = document.getElementById("email");
const mail = document.getElementById("mailcontainer");
const passwordContainer = document.getElementById("password-cont");
const password = document.getElementById("password");
const passwordRpt = document.getElementById("repeat-pass");

const invalidMail = function (errorText) {
  if (document.querySelector(".mailerror")) {
    mail.removeChild(document.querySelector(".mailerror"));
  }
  const container = document.createElement("div");
  container.textContent = errorText;
  container.className = "mailerror";
  mail.appendChild(container);
};

const invalidPassword = function (errorPassword) {
  if (document.querySelector(".passworderror")) {
    passwordContainer.removeChild(document.querySelector(".passworderror"));
  }
  const errorContainer = document.createElement("div");
  errorContainer.textContent = errorPassword;
  errorContainer.className = "passworderror";
  passwordContainer.appendChild(errorContainer);
};

const validate = function () {
  if (!email.value.includes("@")) {
    invalidMail("მეილი არ შეიცავს @ სიმბოლოს");
  } else if (!email.value.includes(".")) {
    invalidMail("მეილი არ შეიცავს .-ს @ შემდეგ");
  }
  for (let i = 0; i < email.value.length; i++) {
    if (email.value.substring(i, email.value.length).includes(".")) {
      if (email.value.slice(i, email.value.length).length < 2) {
        invalidMail("მეილი არ შეიცავს 2 სიმბოლოზე მეტს .-ის შემდეგ");
      }
    }
  }
  if (password.value !== passwordRpt.value) {
    invalidPassword("პაროლი არ ემთხვევა");
  }
  let low = 0;
  let high = 0;
  let specialSymbolCount = 0;
  let numbersCount = 0;

  let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let highAlphabet = lowerAlphabet.toUpperCase();
  let symbols = "#$!%&*^";
  let numbers = "0123456789";

  for (let i = 0; i < password.value.length; i++) {
    if (lowerAlphabet.includes(password.value[i])) {
      low = 1;
    } else if (highAlphabet.includes(password.value[i])) {
      high = 1;
    } else if (symbols.includes(password.value[i])) {
      specialSymbolCount = 1;
    } else if (numbers.includes(password.value[i])) {
      numbersCount = 1;
    }
  }
  if (
    (low === 1 || high === 1) &&
    specialSymbolCount === 0 &&
    numbersCount === 0
  ) {
    invalidPassword("სუსტი პაროლი");
  } else if (
    (low === 1 &&
      numbersCount === 1 &&
      specialSymbolCount === 0 &&
      high === 0) ||
    (high === 1 && numbersCount === 1 && specialSymbolCount === 0 && low === 0)
  ) {
    invalidPassword("საშუალო პაროლი");
  } else if (
    high === 1 &&
    numbersCount === 1 &&
    low === 1 &&
    specialSymbolCount === 0
  ) {
    invalidPassword("რთული პაროლი");
  } else if (
    high === 1 &&
    numbersCount === 1 &&
    low === 1 &&
    specialSymbolCount === 1
  ) {
    invalidPassword("ძალიან რთული");
  }
  if (password.value.length < 8) {
    invalidPassword("შეიყვანეთ 8 სიმბოლოზე მეტი");
  }
};

function translateGeo() {
  // გვერდს არეფრეშებს და ქართულ ენაზე აბრუნებს

  if (sessionStorage.getItem("lang")) {
    sessionStorage.removeItem("lang");
  }

  window.location.reload();
}

function translateEng(a) {
  sessionStorage.setItem("lang", "ENG");

  // Main Page Translate
  if (a === "index-lang-eng") {
    document.querySelector(".translate-navbar-movies").innerText = "Movies";
    document.querySelector(".translate-navbar-kids").innerText = "Kids";
    document.querySelector(".translate-signin").innerText = "Sign In";
    document.querySelector(".translate-signup").innerText = "Sign Up";
    document.querySelector(".translate-contact").innerText = "Contact";
    document.querySelector(".translate-topfilms").innerText = "Top Movies";
    document.querySelector(".translate-premier").innerText = "Premier";
    document.querySelector(".translate-trailers").innerText = "Trailers";
    document.querySelector(".translate-footer").innerText =
      " 🔞 Website includes 18+ Content";
    document.querySelector(".main-search-eng").placeholder = "Search";
    document.querySelector(".translate-title-eng").innerText =
      "Avengers: Infinity War";
  } else if (a === "contact-lang-eng") {
    // Contact Page Translate

    document.querySelector(".translate-contact-title").innerText = "Contact";
    document.querySelector(".translate-input1").placeholder = "Name";
    document.querySelector(".translate-email").placeholder = "Email";
    document.querySelector(".translate-msg").placeholder = "Message";
    document.querySelector(".translate-submit").value = "SEND";
  } else if (a === "movie-lang-eng") {
    //Movies Page Translate
    let moviesButtons = [
      "Detective 100",
      "History 70",
      "Animation 50",
      "Drama 120",
      "Comedy 200",
      "Mystic 40",
      "Action 300",
      "Adventurer 40",
      "Military 60",
      "Horror 80",
      "Fantasy 30",
      "Sport 35",
      "Thriller 25",
      "Series 47",
      "Anime 22",
      "Musical 18",
    ];
    for (let i = 1; i <= moviesButtons.length; i++) {
      document.querySelector(`.gnr${i}`).innerText = moviesButtons[i - 1];
    }
    document.querySelector(".movies-films-eng").innerText = "Movies";
    document.querySelector(".movies-kids-eng").innerText = "Kids";
    document.querySelector(".movies-signin-eng").innerText = "Sign In";
    document.querySelector(".movies-signup-eng").innerText = "Sign Up";
    document.querySelector(".movies-cont-eng").innerText = "Contact";
    document.querySelector(".movies-search-eng").placeholder = "Search";
    document.querySelector(".movies-footer-eng").innerText =
      " 🔞 Website includes 18+ Content";
    document.querySelector(".translate-raiting-eng").innerText = "Raiting";
    document.querySelector(".translate-lang-eng").innerText = "Language";
    document.querySelector(".translate-country-eng").innerText = "Country";
    document.querySelector(".translate-date-eng").innerText = "By Date";
    document.querySelector(".translate-sub-eng").innerText = "Subtitle";
    document.querySelector(".option1").innerText = "Date of addition";
    document.querySelector(".option2").innerText = "IMDB Raiting";
    document.querySelector(".option3").innerText = "Realese Date";
  } else if (a === "kids-lang-eng") {
    // Kids Page Translate
    document.querySelector(".kids-films-eng").innerText = "Movies";
    document.querySelector(".kids-kids-eng").innerText = "Kids";
    document.querySelector(".kids-signin-eng").innerText = "Sign In";
    document.querySelector(".kids-signup-eng").innerText = "Sign Up";
    document.querySelector(".kids-cont-eng").innerText = "Contact";
    document.querySelector(".kids-search-eng").placeholder = "Search";
    document.querySelector(".kids-footer-eng").innerText =
      " 🔞 Website includes 18+ Content";
    document.querySelector(".translate-kid-eng").innerText = "Kids";
    document.querySelector(".translate-geo-eng").innerText = "Georgian";
    document.querySelector(".translate-eng-eng").innerText = "English";
    document.querySelector(".translate-ru-eng").innerText = "Russian";
    document.querySelector(".translate-rait-eng").innerText = "Raiting";
    document.querySelector(".translate-kids-back").innerText = "Back";
  } else if (a === "tv-lang-eng") {
    // Channels Page Translate
    document.querySelector(".tv-films-eng").innerText = "Movies";
    document.querySelector(".tv-kids-eng").innerText = "Kids";
    document.querySelector(".tv-signin-eng").innerText = "Sign In";
    document.querySelector(".tv-signup-eng").innerText = "Sign Up";
    document.querySelector(".tv-cont-eng").innerText = "Contact";
    document.querySelector(".tv-search-eng").placeholder = "Search";
    document.querySelector(".tv-footer-eng").innerText =
      " 🔞 Website includes 18+ Content";
    document.querySelector(".tv-chann-eng").innerText = "Channels";
  } else if (a === "signup-lang-eng") {
    // Sign Up Page Translate
    document.querySelector(".signup-reg-eng").innerText = "Registration";
    document.querySelector(".signup-email-eng").placeholder = "Enter Email";
    document.querySelector(".signup-pass-eng").placeholder = "Password";
    document.querySelector(".signup-confpass-eng").placeholder =
      "Confirm Password";
    document.querySelector(".signup-name-eng").placeholder = "Username";
    document.querySelector(".signup-country-eng").placeholder = "Country";
    document.querySelector(".signup-city-eng").placeholder = "City";
    document.querySelector(".signup-phone-eng").placeholder = "Phone";
    document.querySelector(".signup-btnreg-eng").innerText = "Register";
    document.querySelector(".signup-back-eng").innerText = "Back";
    document.querySelector(".signup-sign-eng").innerText = "Sign In";
  } else if (a === "signin-lang-eng") {
    // Sign In Page Translate
    document.querySelector(".signin-email-eng").placeholder = "Enter Email";
    document.querySelector(".signin-pass-eng").placeholder = "Password";
    document.querySelector(".signin-sign-eng").innerText = "Login";
    document.querySelector(".signin-back-eng").innerText = "Back";
    document.querySelector(".signin-signup-eng").innerText = "Sign Up";
    document.querySelector(".signin-btnsign-eng").innerText = "Sign In";
  }
}
