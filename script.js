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
if (this.correct){

}
else {

}
for (i=0; i < quiz[current].a.length; i++){

document.getElementById("ants" + i).remove();

}
current++;
generateAnswers(current);
}



function startGame(){
 
 setTime();
 
 let scoreshow = document.getElementById("scorespot");
 scoreshow.innerHTML = "score" + score; 
 generateAnswers(0);

 
  }




function setNext(){

showquestion();
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


 function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining";

    if(secondsLeft === 0) {
     // clearInterval(timerInterval);
      //end other functions and show final score
      //finalscore();

    }

  },1000);// 1000milisecond interval between secondsleft--
}





 function finalscore(){
  //returns/ends quiz function when the array object has been fully looped
  $(".buttons").empty();

  localStorage.setItem("score", JSON.stringify(score));

  ///clear div where answer buttons are and reparse append scores

  var data = JSON.parse(localStorage.getItem(score));

  $(data).append(".buttons");


  
  
  
  questionspot.textContent = ("you got" + score + "/" + quiz.length);

  //parse to local storage
  //clear quizdiv
  //parse out recent scores


  
 }

