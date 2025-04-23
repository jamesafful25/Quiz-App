const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const scoreText = document.getElementById("score-text");
let questions = [];
let currentQuestionIndex = 0;
let score = 0;

// Fetch and shuffle the questions
async function fetchQuestions() {
  const res = await fetch(
    "https://opentdb.com/api.php?amount=15&category=28&difficulty=easy&type=multiple"
  );
  const data = await res.json();
  return data.results.map((q) => formatQuestion(q));
}

// Function to format a question
function formatQuestion(rawQuestion) {
  const answers = [...rawQuestion.incorrect_answers];
  const randomIndex = Math.floor(Math.random() * (answers.length + 1));
  answers.splice(randomIndex, 0, rawQuestion.correct_answer);
  return {
    question: decodeHTML(rawQuestion.question),
    answers: answers.map((ans) => ({
      text: decodeHTML(ans),
      correct: ans === rawQuestion.correct_answer,
    })),
  };
}

function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

// Function to handle the "Restart" button click and start a new quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.style.display = "none";
  restartBtn.style.display = "none";
  scoreText.textContent = "Loading quiz...";
  answerButtons.innerHTML = "";
  questionText.textContent = "";
  fetchQuestions().then((qs) => {
    questions = qs;
    scoreText.textContent = "";
    showQuestion();
  });
}

// Function to handle the "Next" button click and show the next question or display the final score
function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () =>
      selectAnswer(button, answer.correct)
    );
    answerButtons.appendChild(button);
  });
}

// Function to reset the state of the quiz interface for a new question
function resetState() {
  nextBtn.style.display = "none";
  answerButtons.innerHTML = "";
}

// Function to handle user's answer selection and check if it's correct or not
function selectAnswer(selectedButton, isCorrect) {
  Array.from(answerButtons.children).forEach((btn) => {
    const correct = questions[currentQuestionIndex].answers.find(
      (a) => a.text === btn.textContent
    )?.correct;
    btn.classList.add(correct ? "correct" : "incorrect");
    btn.disabled = true;
  });
  if (isCorrect) score++;
  nextBtn.style.display = "inline-block";
}

// Function to move to the next question and show score if all questions have been answered
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

// Function to restart the quiz
restartBtn.addEventListener("click", startQuiz);

// Function to show Scores
function showScore() {
  questionText.textContent = "Quiz Completed!";
  answerButtons.innerHTML = "";
  scoreText.textContent = `You scored ${score} out of ${questions.length}`;
  restartBtn.style.display = "inline-block";
  nextBtn.style.display = "none";
}
// Start the quiz on load
startQuiz();
