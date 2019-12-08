


//create timer function

var timeEl = document.querySelector(".timer");
var screen = document.querySelector(".container");
var questionspot = document.querySelector("#questions");
var questionoptions = document.querySelector(quiz);


var secondsLeft = 80;

var beginner = document.querySelector("#buttonbegin");
beginner.addEventListener("click", startGame());

for (var i = 0; i < quiz.length; i++){
function startGame(){
  
 
  questionspot.textContent = (quiz[i].q);
  answerselect.textContent = (quiz[i].a);
 
  }
}

function showquestion() {
  

  questionspot.innerHTML = (quiz[i].a);
  }


function setNext(){}



function answerchoice(){


}






beginner.onclick = function setTime() {
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

  {q: "Sugar gliders are members of the marsupial class", 
  a: [ {text: "true", correct: true},
        {text: "false", correct: false}]},


 
 {q: "The dog Blue from Blues Clues was", a: [ {text: "female", correct: true}, {text: "male", correct:false}]},

 {q: "Which of the following was the capital of Japan prior to Tokyo?",  a: [ {text: "Kyoto", correct: true},
 {text: "Tokyo", correct: false}, { text: "Nippori", correct: false}, {text: "Hokkaido", correct: false}]},
 
 

 {q: "Black ants can live for up to 15 years",   a: [ {text: "true", correct: true},
 {text: "false", correct: false}]},
 
 {q: "As of 2017, which US state's main export was Zinc?", a: [ {text: "Alaska", correct: true},
 {text: "Kentucky", correct: false}, { text: "California", correct: false}, {text: "Utah", correct: false}]},
 

 {q: "During which year was the film Titanic released?:", a:[ {text: "1997", correct: true},
 {text: "1994", correct: false}, { text: "1999", correct: false}, {text: "1993", correct: false}]}
 



]

var score = 0;
//hook into main div for quiz to append results
var quizdiv = document.querySelector(".container");
var answerselect = document.querySelector(".buttons");


//try to set text content of questions div and buttons


for (var i = 0; i < quiz.length; i++) {
//try to make the buttons onclick triggers
 var answer = onclick(quiz[i].q);


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






("you got" + score + "/" + quiz.length)