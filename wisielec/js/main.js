import Hangman from "./Hangman.js";

const gameContainer = document.querySelector(".game-container");
const gameBoard = document.querySelector(".hangman-container");
const passwordForm = document.querySelector(".password-form");
const answerContainer = document.querySelector(".answer-container");
const alphabetContainer = document.querySelector(".alphabet-container");
let alphabet = new Set([..."aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż"]);
let password;
let answer = "";

const startGame = (e) => {
  e.preventDefault();
  password = e.target.password.value;
  console.log([...password]);
  gameContainer.removeChild(passwordForm);
  createAnswerUi();
  createAlphabetUi();
};

const checkLetter = (e) => {
  const checkingLetter = e.target.innerText;
  e.target.disabled = true;
  if (password.includes(checkingLetter)) {
    answer += checkingLetter;
  }
  createAnswerUi();
};

const createAlphabetUi = () => {
  alphabet.forEach((letter) => {
    const spanElement = document.createElement("button");
    spanElement.innerText = letter;
    const spaceElement = document.createTextNode(" ");
    spanElement.addEventListener("click", checkLetter);
    alphabetContainer.appendChild(spanElement);
    alphabetContainer.appendChild(spaceElement);
  });
};

const createAnswerUi = () => {
  answerContainer.innerText = "";
  let answerNode = "";
  [...password].forEach((passwordLetter) => {
    if (answer.includes(passwordLetter)) {
      answerNode += ` ${passwordLetter} `;
    } else if (passwordLetter === " ") {
      answerNode += "\u00A0\u00A0";
    } else {
      answerNode += " _ ";
    }
  });
  const answerDOMTextNode = document.createTextNode(answerNode);
  answerContainer.appendChild(answerDOMTextNode);
};

const hg = new Hangman();
passwordForm.addEventListener("submit", startGame);
