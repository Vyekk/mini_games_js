import Hangman from './Hangman.js';

const gameContainer = document.querySelector('.game-container');
const hangmanContainer = document.querySelector('.hangman-container');
const passwordForm = document.querySelector('.password-form');
const answerContainer = document.querySelector('.answer-container');
const alphabetContainer = document.querySelector('.alphabet-container');
let alphabet = new Set([...'aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż']);
let password;
let answer = '';

const startGame = (e) => {
  const regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\d]/;
  e.preventDefault();
  password = e.target.password.value;
  if (password.length === 0) {
    throw new Error('Nie podano hasła');
  } else if (regex.test(password)) {
    throw new Error('Podano nieprawidłowe znaki');
  }
  password = password.toLowerCase();
  gameContainer.removeChild(passwordForm);
  createHangmanUi();
  createAnswerUi();
  createAlphabetUi();
};

const checkLetter = (e) => {
  const checkingLetter = e.target.innerText;
  const canvas = document.querySelector('#imageView');
  e.target.disabled = true;
  if (password.includes(checkingLetter)) {
    answer += checkingLetter;
  } else {
    hangman.writePart(canvas);
  }
  createAnswerUi();
};

const createAlphabetUi = () => {
  alphabet.forEach((letter) => {
    const spanElement = document.createElement('button');
    spanElement.innerText = letter;
    const spaceElement = document.createTextNode(' ');
    spanElement.addEventListener('click', checkLetter);
    alphabetContainer.appendChild(spanElement);
    alphabetContainer.appendChild(spaceElement);
  });
};

const createAnswerUi = () => {
  answerContainer.innerText = '';
  let answerNode = '';
  [...password].forEach((passwordLetter) => {
    if (answer.includes(passwordLetter)) {
      answerNode += ` ${passwordLetter} `;
    } else if (passwordLetter === ' ') {
      answerNode += '\u00A0\u00A0';
    } else {
      answerNode += ' _ ';
    }
  });
  const answerDOMTextNode = document.createTextNode(answerNode);
  answerContainer.appendChild(answerDOMTextNode);
};

const createHangmanUi = () => {
  const canvasElement = document.createElement('canvas');
  canvasElement.setAttribute('width', 300);
  canvasElement.setAttribute('height', 300);
  canvasElement.setAttribute('id', 'imageView');
  hangmanContainer.appendChild(canvasElement);
};

const hangman = new Hangman();
passwordForm.addEventListener('submit', startGame);
