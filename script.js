


//define all vgolabal variables


var timeEl = document.querySelector(".timer");
var screen = document.querySelector(".container");
var questionspot = document.querySelector("#questions");
var questionoptions = document.querySelector(quiz);
let randomquestion, currentquestion; 


let answerspot = document.getElementById("#btn1", "#btn2", "#btn3", "#btn4");

var score = 0;
let scoreshow = document.getElementById(".scorespot");
scoreshow.textContent = "score" + score; 

var secondsLeft = 80;

var beginner = document.querySelector("#buttonbegin");
beginner.addEventListener("click", startGame());

//add audio file for correct onlick event
function play(){
  var audio = document.getElementById("audio");
  audio.play();
            }




function startGame(){
 
 randomquestion = quiz.sort(() => Math.random() - .5);
 currentquestion = 0;
 
  setNext();
 

 
  }




function setNext(){

showquestion(randomquestion[currentquestion]);
}

function showquestion(question){
  questionspot.innerHTML = quiz.q;
  quiz.a.forEach(answer => {
    
  answerspot.textContent = a.text;
    
    if (a.correct === true) {

      score++;

      secondsLeft + 10;

      play();

      setNext();

    }

    else {
      score --;

      secondsLeft - 10;

      setNext();

    }
    
  });
}


function answerchoice(){
  //create onlick function for button
  answerspot.addEventListener
  


}






beginner.onclick = function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      ////change send message to end game
    }

  },1000);// 1000milisecond interval between secondsleft--
}



///my questions and answers

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







 

 function finalscore(){
  
  
  
  
  
  scoreshow.textContent = ("you got" + score + "/" + quiz.length)

  //parse to local storage
  //clear quizdiv
  //parse out recent scores


  
 }

