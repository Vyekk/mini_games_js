import Hangman from "./Hangman.js";

const gameContainer = document.querySelector(".game-container");
const gameBoard = document.querySelector(".hangman-container");
const passwordForm = document.querySelector(".password-form");
const answerContainer = document.querySelector(".answer-container");
const alphabetContainer = document.querySelector(".alphabet-container");
let alphabet = new Set([..."aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż"]);
let password;

const writePassword = (e) => {
  e.preventDefault();
  password = e.target.password.value;
  gameContainer.removeChild(passwordForm);
  createAlphabetUi();
};

const checkLetter = (e) => {
  console.log(password.includes(e.target.innerText));
};

const createAlphabetUi = () => {
  alphabet.forEach((letter) => {
    const spanElement = document.createElement("span");
    spanElement.innerText = letter;
    const spaceElement = document.createTextNode(" ");
    spanElement.addEventListener("click", checkLetter);
    alphabetContainer.appendChild(spanElement);
    alphabetContainer.appendChild(spaceElement);
  });
};

const createAnswerUi = () => {};

const hg = new Hangman();
passwordForm.addEventListener("submit", writePassword);
