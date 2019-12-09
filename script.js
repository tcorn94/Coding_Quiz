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


//define all global variables


var timeEl = document.querySelector(".timer");




var current = 0;


var score = 0;


var secondsLeft = 80;

function increase(){
  score++;
  let scoreshow = document.getElementById("scorespot");
 scoreshow.textContent = "current score " + score; 
  secondsLeft += 10;
  timeEl.textContent = secondsLeft + " seconds remaining";
}

function decrease(){
 
 
  secondsLeft -= 10;
  timeEl.textContent = secondsLeft + " seconds remaining";
}

var beginner = document.querySelector("#buttonbegin");


//add audio file for correct onlick event
function play(){
  var audio = document.getElementById("audio");
  audio.play();
            }


            function generateAnswers(index){
              document.getElementById("questionbox").textContent = quiz[index].q;
  
              for (i=0; i < quiz[index].a.length; i++){


                var buttons = document.createElement("input");
                buttons.type = "button";

                buttons.value = quiz[index].a[i].text;
                buttons.setAttribute("id","ants" + i);
                buttons.setAttribute("correct", quiz[index].a[i].correct);
                buttons.onclick = nextquestion;
                
                document.getElementById("answers").append(buttons);
        

              }
              

}


function nextquestion(e) {
if (this.getAttribute("correct") == "true"){
play();
increase();
}
else {
decrease();
}
for (i=0; i < quiz[current].a.length; i++){

document.getElementById("ants" + i).remove();

}
current++;

if (current == quiz.length){
  finalscore();
}
generateAnswers(current);


}



function startGame(){
 
 setTime();
 
 let scoreshow = document.getElementById("scorespot");
 scoreshow.innerHTML = "current score " + score; 
 generateAnswers(0);

 
  }



function answerchoice(){
  //create onlick function for button
  answerspot.addEventListener
  


}
var timerInterval;

 function setTime() {
     timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining";

    if(secondsLeft === 0) {
     finalscore();

    }

  },1000);// 1000milisecond interval between secondsleft--
}





 function finalscore(){

  clearInterval(timerInterval);
 
  
  var mainarea = document.getElementById("questionbox");
  
  $(".buttons").empty();
  mainarea.innerHTML = "";

  var allScores;

  if (localStorage.getItem("saveScore")){
    allScores = JSON.parse(localStorage.getItem("saveScore"));
  }
  else {
    allScores = []
  }

  allScores.push(score);

  localStorage.setItem("saveScore", JSON.stringify(allScores));

  ///clear div where answer buttons are and reparse append scores

  var data = JSON.parse(localStorage.getItem("saveScore"));

  var scorelist = "Your scores "; 
  for (i=0; i<data.length; i++) {
    scorelist += data[i] + "  ,  ";
  }

  mainarea.innerHTML = scorelist;



  //parse to local storage
  //clear quizdiv
  //parse out recent scores


  
 }

