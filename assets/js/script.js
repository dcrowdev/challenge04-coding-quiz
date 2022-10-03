var questions = [
{
"question1": "Commonly used data types DO NOT include:",
"a": "strings",
"b": "booleans",
"c": "alerts",
"d": "numbers"
},
{
"question2": "The condition in an if / else statement is enclosed within ____.",
"a": "quotes",
"b": "curly brackets",
"c": "parentheses",
"d": "square brackets"
},
{
"question3": "Arrays in JavaScript can be used to store ____.",
"a": "numbers and strings",
"b": "other arrays",
"c": "booleans",
"d": "all of the above"
},
{
"question4": "String values must be enclosed within ____ when being assigned to variables.",
"a": "commas",
"b": "curly brackets",
"c": "quotes",
"d": "parentheses"
},
{
"question5": "A very usefool tool used during development and debugging for printing content to the debugger is:",
"a": "JavaScript",
"b": "terminal / bash",
"c": "for loops",
"d": "console.log"
}
];

var getQuestionTitles = document.getElementById("questionTitles");
var getStartQuizBtn = document.getElementById("startQuizBtn");
var getList = document.getElementById("list");
var getFontPageP = document.getElementById("frontP");
var getAnswer1 = document.getElementById("answer1");
var getAnswer2 = document.getElementById("answer2");
var getAnswer3 = document.getElementById("answer3");
var getAnswer4 = document.getElementById("answer4");

// QUIZ FUNCTIONS
function startQuestions() {
getQuestionTitles.innerHTML = questions[0].question1;
getStartQuizBtn.style.display = "none";
getFontPageP.remove();
getList.style.display = "block";
getAnswer1.innerHTML = questions[0].a;
getAnswer2.innerHTML = questions[0].b;
getAnswer3.innerHTML = questions[0].c;
getAnswer4.innerHTML = questions[0].d;
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
