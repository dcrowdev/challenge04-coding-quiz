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

var getQuestionTitles = document.getElementById("questionTitles");
var getStartQuizBtn = document.getElementById("startQuizBtn");
var getList = document.getElementById("list1");
var getFontPageP = document.getElementById("frontP");
var getAnswer1 = document.getElementById("a");
var getAnswer2 = document.getElementById("b");
var getAnswer3 = document.getElementById("c");
var getAnswer4 = document.getElementById("d");
var currentQuestion = 0;









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
console.log(currentQuestion);
getQuestionTitles.innerHTML = questions[currentQuestion].question;
}



function answerClicked(e) {
 if (currentQuestion.answer == e.target.getAttribute('id')) {
  e.target.dataset.value = "true";
}
  if (e.target.dataset.value == "true") {
    alert("correct!");
    } else {alert("false");
  nextQuestion();
}
}




function gameOver() {
}

// TIMER FUNCTIONS


function timer() {
var timeLeft = 5;
var timer2 = setInterval(secondsInterval, 1000);

function secondsInterval() {
  timeLeft--;
  document.getElementById("timerCount").innerHTML = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer2);
      gameOver();
    }
   }
};



// CALLBACKS
getStartQuizBtn.addEventListener("click", timer);
getStartQuizBtn.addEventListener("click", startQuestions);
getAnswer1.addEventListener("click", answerClicked);
getAnswer2.addEventListener("click", answerClicked);
getAnswer3.addEventListener("click", answerClicked);
getAnswer4.addEventListener("click", answerClicked);