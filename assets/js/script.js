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
"question": "A very useful tool used during development and debugging for printing content to the debugger is:",
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
document.getElementById("timerCount").innerHTML = timeLeft;

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
};

function nextQuestion() {
  currentQuestion++;
    if (currentQuestion < 5) {
      getQuestionTitles.innerHTML = questions[currentQuestion].question;
      getAnswer1.innerHTML = questions[currentQuestion].a;
      getAnswer2.innerHTML = questions[currentQuestion].b;
      getAnswer3.innerHTML = questions[currentQuestion].c;
      getAnswer4.innerHTML = questions[currentQuestion].d;
    }
    if (currentQuestion > 5) {
      gameOver();
    }
};

// TIMER FUNCTION
function timer() {
var timer2 = setInterval(secondsInterval, 1000);
    function secondsInterval() {
        timeLeft--;
        document.getElementById("timerCount").innerHTML = timeLeft;
      if (timeLeft < 1 || currentQuestion >= 5) {
        clearInterval(timer2);
        gameOver();
      }
    }
};


//  EVENT FUNCTION
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

// NO MORE QUESTIONS OR TIMER 0 FUNCTION
function gameOver() {
    if (timeLeft < 0) {
      timeLeft = 0;
      document.getElementById("timerCount").innerHTML = timeLeft;
    }
    document.getElementById("finalScorePost").innerHTML = timeLeft;
    getEndDiv.classList.remove("hide");
    getEndDiv.style.display = "flex";
    getContainer.style.display = "none";
    currentQuestion = 0;
};

// HIGHSCORES LINK FUNCTION
function highScoresClick() {
    getEndDiv.classList.remove("hide");
    getEndDiv.style.display = "flex";
    getContainer.style.display = "none";
    document.getElementById("header").style.display = "none";
    getEndDiv.style.display = "none";
    getHighScores.classList.remove("hide");
    getHighScores.style.display = "flex";
  renderHighscores();
};

//SUBMIT BTN FUNCTION
function submit() {
    document.getElementById("header").style.display = "none";
    getEndDiv.style.display = "none";
    getHighScores.classList.remove("hide");
    getHighScores.style.display = "flex";
  storeHighScores();
  renderHighscores();
};

// LOCAL STORAGE FUNCTION
function storeHighScores() {
    var highScoresStorageArr = JSON.parse(localStorage.getItem("highScoresStorage")) || [];
    var highScoresStorage = {
        initials: document.getElementById("initial-input").value,
        scores: timeLeft
    };
      highScoresStorageArr.push(highScoresStorage);
      localStorage.setItem("highScoresStorage", JSON.stringify(highScoresStorageArr));
};

// RENDER LOCAL STORAGE FUNCTION
function renderHighscores() {
    var scoresArr = [];
    var parsedStorage = JSON.parse(localStorage.getItem("highScoresStorage"));
      for (let i = 0; i < parsedStorage.length; i++) {
        scoresArr.push(parsedStorage[i]);
        scoresArr.sort(function (b,a) {
      if (a.scores < b.scores) {
        return -1;
      }
      if (a.scores > b.scores) {
        return 0;}
        })
      }
      for (let i = 0; i < scoresArr.length; i++) {
        var li = document.createElement("li");
        getHighScoresList.appendChild(li).innerHTML = scoresArr[i].initials + " - " + scoresArr[i].scores;
      }
};

// GO BACK BTN FUNCTION
function goBack() {
  location.reload();
};

//  CLEAR HIGH SCORES (LOCAL STORAGE) BTN FUNCTION
function clearHighScores() {
  localStorage.clear();
  getHighScoresList.innerHTML = '';
};

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
