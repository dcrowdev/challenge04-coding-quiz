var questions = [
{
"question": "Commonly used data types DO NOT include:",
"a": "1. strings",
"b": "2. booleans",
"c": "3. alerts",
"d": "4. numbers",
"answer": "c"
},
{
"question": "The condition in an if / else statement is enclosed within ____.",
"a": "1. quotes",
"b": "2. curly brackets",
"c": "3. parentheses",
"d": "4. square brackets",
"answer": "c"
},
{
"question": "Arrays in JavaScript can be used to store ____.",
"a": "1. numbers and strings",
"b": "2. other arrays",
"c": "3. booleans",
"d": "4. all of the above",
"answer": "d"
},
{
"question": "String values must be enclosed within ____ when being assigned to variables.",
"a": "1. commas",
"b": "2. curly brackets",
"c": "3. quotes",
"d": "4. parentheses",
"answer": "c"
},
{
"question": "A very usefool tool used during development and debugging for printing content to the debugger is:",
"a": "1. JavaScript",
"b": "2. terminal / bash",
"c": "3. for loops",
"d": "4. console.log",
"answer": "d"
}
];

var getContainer = document.getElementById("container");
var getQuestionTitles = document.getElementById("questionTitles");
var getStartQuizBtn = document.getElementById("startQuizBtn");
var getList = document.getElementById("list1");
var getFontPageP = document.getElementById("frontP");
var getAnswer1 = document.getElementById("a");
var getAnswer2 = document.getElementById("b");
var getAnswer3 = document.getElementById("c");
var getAnswer4 = document.getElementById("d");
var getEndDiv = document.getElementById("end-screen")
var getSubmitBtn = document.getElementById("submit-btn");
var getHighScores = document.getElementById("highscores");
var getHighScoresList = document.getElementById("highscores-list");
var getGoBackBtn = document.getElementById("go-back-btn");
var getClearHighscoresBtn = document.getElementById("clear-highscores-btn");
var currentQuestion = 0;
var timeLeft = 60;









// QUIZ FUNCTIONS
function startQuestions() {
getQuestionTitles.innerHTML = questions[0].question;
getStartQuizBtn.classList.add("hide");
getList.classList.replace("hide", "list");
getFontPageP.remove();
getAnswer1.innerHTML = questions[0].a;
getAnswer2.innerHTML = questions[0].b;
getAnswer3.innerHTML = questions[0].c;
getAnswer4.innerHTML = questions[0].d;
}



function nextQuestion() {
currentQuestion++;
if (currentQuestion < 5) {
getQuestionTitles.innerHTML = questions[currentQuestion].question;
getAnswer1.innerHTML = questions[currentQuestion].a;
getAnswer2.innerHTML = questions[currentQuestion].b;
getAnswer3.innerHTML = questions[currentQuestion].c;
getAnswer4.innerHTML = questions[currentQuestion].d;
}
if (currentQuestion >= 5) {
  currentQuestion = 0;
 gameOver();
}
}

// TIMER FUNCTIONS


function timer() {
var timer2 = setInterval(secondsInterval, 1000);

function secondsInterval() {
  timeLeft--;
  document.getElementById("timerCount").innerHTML = timeLeft;
    if (timeLeft < 1) {
      clearInterval(timer2);
      gameOver();
    }
  }
};



function answerClicked(e) {
 if (e.target.getAttribute('id') == questions[currentQuestion].answer) {
  e.target.dataset.value = "true";
  }
  if (e.target.dataset.value == "true") {
    document.getElementById("correctOrWrong").innerHTML = "Correct!";
    timeLeft += 10;
    } else {
  document.getElementById("correctOrWrong").innerHTML = "Sorry but Wrong!";
    timeLeft -= 10;
    if (timeLeft < 0) {
      timeLeft = 0;
      gameOver();
  }
  }
  e.target.dataset.value = "false";
nextQuestion();
};






function gameOver() {
document.getElementById("finalScorePost").innerHTML = timeLeft;
getEndDiv.classList.remove("hide");
getEndDiv.style.display = "flex";
getContainer.style.display = "none";
}

function submit() {
document.getElementById("header").style.display = "none";
getEndDiv.style.display = "none";
getHighScores.classList.remove("hide");
getHighScores.style.display = "flex";
storeHighScores();
renderHighscores();

}

function storeHighScores() {
var highScoresStorageArr = JSON.parse(localStorage.getItem("highScoresStorage")) || [];
var highScoresStorage = {
initials: document.getElementById("initial-input").value,
scores: timeLeft
};
highScoresStorageArr.push(highScoresStorage);
console.log(highScoresStorageArr);
localStorage.setItem("highScoresStorage", JSON.stringify(highScoresStorageArr));
}


function renderHighscores() {
var parsedStorage = JSON.parse(localStorage.getItem("highScoresStorage"));
console.log(parsedStorage);
// parsedStorage.sort()
// for
var li = document.createElement("li");
getHighScoresList.appendChild(li).innerHTML = parsedStorage[0].initials + " - " + parsedStorage[0].scores;
}

function goBack() {
location.reload();
}

function clearHighScores() {

}



// CALLBACKS
getStartQuizBtn.addEventListener("click", timer);
getStartQuizBtn.addEventListener("click", startQuestions);
getAnswer1.addEventListener("click", answerClicked);
getAnswer2.addEventListener("click", answerClicked);
getAnswer3.addEventListener("click", answerClicked);
getAnswer4.addEventListener("click", answerClicked);
getSubmitBtn.addEventListener("click", submit);
getGoBackBtn.addEventListener("click", goBack);
getClearHighscoresBtn.addEventListener("click", clearHighScores);
