import { questions } from './questions.js';
import { scores } from './scores.js';

// questions variables
let score = 0;
let questionIndex = 0;
let questionsList = questions();
let answerButtons;

// sounds
const startSound = new Audio();
startSound.src = './assets/sfx/start.wav';
const correctSound = new Audio();
correctSound.src = './assets/sfx/correct.wav';
const wrongSound = new Audio();
wrongSound.src = './assets/sfx/incorrect.wav';


// get elements
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start');
const questionsDiv = document.getElementById('questions');
const questionTitle = document.getElementById('question-title');
const choices = document.getElementById('choices');
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById('final-score');
const feedback = document.getElementById('feedback');
const soundToggle = document.getElementById('sound');

// timer variables
const timeSpan = document.getElementById('time');
const timer = document.querySelector('.timer');
let time;
let countdownTimer;

// display questions with choices of answer
function questionShow() {
  questionTitle.classList.remove('show');
  let question = questionsList[questionIndex];
  questionTitle.innerText = question.title;
  setTimeout(() => {
    questionTitle.classList.add('show');
  }, 200);
  choices.innerHTML = question.answers
    .map(
      (answer, index) =>
        `<button type="button" value="${answer}" id="answer-${index}" data-index=${
          index + 1
        } class="quiz-option">${answer}</button>`
    )
    .join('');

  answerButtons = choices.querySelectorAll('button');
  answerButtons.forEach((answerButton) => {
    setTimeout(() => {
      answerButton.classList.add('show');
    }, 200);
    answerButton.addEventListener('click', processAnswer);
  });
}

// choice button callback function
function processAnswer(e) {
  let selectedAnswer = e.target.value;
  let answerButton = e.target;
  let question = questionsList[questionIndex];
  let correctAnswer = question.answers[question.correct];
  if (selectedAnswer === correctAnswer) {
    answerButton.classList.add('correct');
    if (soundToggle.checked) {
      correctSound.play();
    }
    feedback.classList.add('show');
    feedback.innerText = 'Correct!';
    // increment score value
    score++;
  } else {
    answerButton.classList.add('wrong');
    if (soundToggle.checked) {
      wrongSound.play();
    }
    feedback.classList.add('show');
    feedback.innerText = 'Wrong!';
    time -= 10;
  }
  answerButtons.forEach((answerButton) => {
    answerButton.removeEventListener('click', processAnswer);
    setTimeout(() => {
      questionTitle.classList.remove('show');
    }, 850);
  });
  setTimeout(() => {
    feedback.classList.remove('show');
    if (questionIndex === questionsList.length - 1) {
      // end of the quiz
      setTimeout(() => {
        endQuiz();
      }, 500);
      if (time > 0 && soundToggle.checked) {
      }
    } else {
      questionIndex++;
      questionShow();
    }
  }, 1000);
  
}

// timer
function startTimer() {
  countdownTimer = setInterval(() => {
    time--;
    timeSpan.innerText = time;
    timer.classList.add('show');
    if (time <= 0) {
      endQuiz();
      if (soundToggle.checked) {
      }
      setTimeout(() => {
        let title = document.querySelector('#end-screen p');
        let subtitle = document.createElement('span');
        subtitle.setAttribute('class', 'subtitle');
        subtitle.textContent = `Time is up! `;
        endScreen.insertBefore(subtitle, title);
      }, 250);
    }
  }, 1000);
}

// start quiz init
startBtn.addEventListener('click', startQuiz);

// start quiz
function startQuiz() {
  setTimeout(() => {
    startScreen.classList.add('hide');
    questionsDiv.classList.remove('hide');
    questionShow();
    time = 90;
  }, 1000);
  startTimer();
}

// quiz end
function endQuiz() {
  clearInterval(countdownTimer);
  timer.classList.remove('show');
  timeSpan.innerText = 0;
  questionsDiv.classList.add('hide');
  endScreen.classList.remove('hide');
  setTimeout(() => {
    inputGroup.forEach((el) => el.classList.add('show'));
  }, 200);
  finalScore.textContent = score;
  scores(score);
}

soundToggle.addEventListener('change', () => {
  if (soundToggle.classList.contains('on')) {
    soundToggle.classList.replace('on', 'off');
  } else {
    soundToggle.classList.replace('off', 'on');
  }
});

