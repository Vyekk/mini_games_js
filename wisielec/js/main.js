import Hangman from "./Hangman.js";

const gameContainer = document.querySelector('.container');
const gameBoard = document.querySelector('.container-hangman');
const passwordForm = document.querySelector('.password-form');


const writePassword = (e) => {
    e.preventDefault();
    console.log(e.target.password.value);
    gameContainer.removeChild(passwordForm);

};

const hg = new Hangman();
passwordForm.addEventListener('submit', writePassword);