const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const hiddenToDo = document.querySelector("#todo-form input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(name) {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours < 12) {
    greeting.innerText = `Good morning, ${name}!`;
  } else if (hours >= 12 && hours < 18) {
    greeting.innerText = `Good afternoon, ${name}!`;
  } else if (hours >= 18 && hours < 24) {
    greeting.innerText = `Good evening, ${name}!`;
  } else {
    greeting.innerText = `Good night, ${name}!`;
  }
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  hiddenToDo.classList.toggle(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  hiddenToDo.classList.toggle(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
