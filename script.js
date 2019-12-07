


//create timer function

var timeEl = document.querySelector(".timer");
var screen = document.querySelector(".container");


var secondsLeft = 80;


function startGame(){

}

function setNext(){}



function answerchoice(){

  
}






function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();////change send message to end game
    }

  },1000);// 1000milisecond interval between secondsleft--
}
//change send message to end game
function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl); //append end game

}

setTime();

///beginning of quiz formatting

var quiz = [

  {q: "Sugar gliders are members of the marsupial class", a: true},

 {q: "Edgar Allan Poe did NOT write which of the following:", a: "because I could not stop for death"},
 
 {q: "The dog Blue from Blues Clues was", a: "female"},

 {q: "Which of the following was the capital of Japan prior to Tokyo?", a: "Kyoto"},
 
 {q: "Which U.S. President threw up on the Japanese prime minister?", a: "George H. W. Bush"},

 {q: "Black ants can live for up to 15 years", a: true},
 
 {q: "As of 2017, which US state's main export was Zinc?", a: "Alaska"},

 {q: "During which year was the film Titanic released?:", a: "1997"},



]

var score = 0;
//hook into main div for quiz to append results
var quizdiv = document.querySelector(".container");
var answerselect = document.querySelector(".buttons");
var beginner = document.querySelector("#buttonbegin");
var questionspot = document.querySelector("#questions");
//try to set text content of questions div and buttons


for (var i = 0; i < quiz.length; i++) {
//try to make the buttons onclick triggers
 var answer = onclick(quiz[i].q);

 beginner.onclick();{
  questionspot.textContent = (quiz[i].q);
  answerselect.textContent = (quiz[i].a);



 if (answer === quiz[i].a) {

     quizdiv.textContent = "You are correct!";
     quizdiv.textContent = score ++;

  
 }
 else {
         quizdiv.textContent = "Sorry, try again!";
     }
}

}




("you got" + score + "/" + quiz.length)